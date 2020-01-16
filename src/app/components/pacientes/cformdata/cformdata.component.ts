import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { PacientesService } from '../../../services/pacientes.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cformdata',
  templateUrl: './cformdata.component.html',
  styleUrls: ['./cformdata.component.scss']
})
export class CformdataComponent implements OnInit {
  public sniper = false;
  public model_data = {};
  public formGroup: FormGroup;
  public fecha_nacimiento: any;
  public datos_usuario: any[] = [];
  public message: any;
  public filemarcalogo: File = null;
  public imagePath;
  public imglogo: any = '/assets/img/elgestor.png';
  public discapacidad = false;
  constructor(
    private cookie_service: CookieService,
    private _adapter: DateAdapter<any>,
    private formBuilder: FormBuilder,
    private http: PacientesService,
    private router: Router,
  ) {
    this._adapter.setLocale('es');
    this.formGroup = this.formBuilder.group({
      Nombre: ['', Validators.required],
      ApellidoMaterno: ['', Validators.required],
      ApellidoPaterno: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      Edad: [''],
      Sexo: ['', Validators.required],
      Curp: [''],
      Email: ['', Validators.email],
      Telefono: [''],
      Movil: ['', Validators.required],
      ExpedienteAnteriro: [''],
      Causa_Incapacidad: [''],
      Nombre_Incapacidad: [''],
      Apellidos_Incapacidad: [''],
      Parentesco_Incapacidad: [''],
      Estado: [''],
      Codigo_Postal: [''],
      Municipio: [''],
      Colonia: [''],
      Calle: [''],
      Nombre_Emergecia: ['', Validators.required],
      Apellidos_Emergecia: ['', Validators.required],
      Parentesco_Emergecia: ['', Validators.required],
      Email_Emergecia: [''],
      Telefono_Emergecia: [''],
      Movil_Emergecia: ['', Validators.required],
      Causa_Discapacidad: ['', { disabled: true }],
      Nombre_Discapacidad: ['', { disabled: true }],
      Apellidos_Discapacidad: ['', { disabled: true }],
      Parentesco_Discapacidad: ['', { disabled: true }],
      Discapacidad: ['', { checked: false }],
      Grupo_Sanguineo: [''],
      Religion: [''],
      Ocupacion: [''],
    });
    this.datos_usuario = JSON.parse(this.cookie_service.get('datos_usuario'));
   }

  ngOnInit() {
    this.activar_inputs(false);
  }

  onGo(ir) {
    this.router.navigateByUrl('/' + ir);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    const dia = (event.value['_i'].date < 10) ? '0' + event.value['_i'].date : event.value['_i'].date;
    const mes =  event.value['_i'].month + 1;
    const year = event.value['_i'].year;
    this.fecha_nacimiento = event;
    // this.formGroup.controls['FechaNacimiento'].setValue(dia + '-' + mes + '-' + year);
    const hoy = new Date();
    const cumpleanos = new Date(this.fecha_nacimiento);
    let edad = hoy.getFullYear() - year;
    const m = hoy.getMonth() - mes;

    if (m < 0 || (m === 0 && hoy.getDate() < dia)) {
      edad--;
    }

    this.formGroup.controls['Edad'].setValue(edad);
  }
  OnsaveForm() {
    if (this.formGroup.controls['Discapacidad'].value) {
      this.formGroup.get('Causa_Discapacidad').setValidators([Validators.required]);
      this.formGroup.controls['Nombre_Discapacidad'].setValidators([Validators.required]);
      this.formGroup.controls['Apellidos_Discapacidad'].setValidators([Validators.required]);
      this.formGroup.controls['Parentesco_Discapacidad'].setValidators([Validators.required]);

      this.formGroup.controls['Nombre_Discapacidad'].updateValueAndValidity();
      this.formGroup.controls['Apellidos_Discapacidad'].updateValueAndValidity();
      this.formGroup.controls['Parentesco_Discapacidad'].updateValueAndValidity();
      this.formGroup.get('Causa_Discapacidad').updateValueAndValidity();
    } else {
      this.formGroup.get('Causa_Discapacidad').clearValidators();
      this.formGroup.get('Nombre_Discapacidad').clearValidators();
      this.formGroup.get('Apellidos_Discapacidad').clearValidators();
      this.formGroup.get('Parentesco_Discapacidad').clearValidators();

      this.formGroup.get('Causa_Discapacidad').updateValueAndValidity();
      this.formGroup.get('Nombre_Discapacidad').updateValueAndValidity();
      this.formGroup.get('Apellidos_Discapacidad').updateValueAndValidity();
      this.formGroup.get('Parentesco_Discapacidad').updateValueAndValidity();
    }
    if (this.formGroup.valid) {
      this.sniper = true;
      this.http.savedata(this.formGroup.value)
        .subscribe(data => {
          if (this.filemarcalogo) {
            this.updatefoto(data['id']);
          } else {
            this.sniper = false;
            Swal.fire('Alerta', 'El paciente se registro sin foto', 'info');
            this.formGroup.reset();
          }
        }, error => {
          console.log(error);
        });
    } else {
      Swal.fire('Error', 'Existen errores en el formulario', 'error');
    }
  }
  preview(files) {
    if (files.length === 0) {
      return;
    }
    this.sniper = true;
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
    this.filemarcalogo = <File>files[0];
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imglogo = reader.result;
    };
    this.sniper = false;
  }
  // funcion para subir la imagen 
  updatefoto(Paciente) {
    const formdata = new FormData();
    if (this.filemarcalogo) {
      formdata.append('IDPaciente', Paciente);
      formdata.append('logo', this.filemarcalogo, this.filemarcalogo.name);
      this.http.saveimg(formdata)
        .subscribe(data => {
          this.sniper = false;
          if (data['status'] === true) {
            Swal.fire('Exito', 'Paciente Registrado.', 'success');
            this.formGroup.reset();
            this.imglogo = '/assets/img/elgestor.png';
          } else {
            Swal.fire('Error', data['message'], 'error');
         }
        }, errors => {
          console.log(errors);
        });
    } else {
      return false;
    }
  }
  activar_inputs(evento) {
    if (evento) {
      this.formGroup.controls['Causa_Discapacidad'].enable();
      this.formGroup.controls['Nombre_Discapacidad'].enable();
      this.formGroup.controls['Apellidos_Discapacidad'].enable();
      this.formGroup.controls['Parentesco_Discapacidad'].enable();
    } else {
      this.formGroup.controls['Causa_Discapacidad'].disable();
      this.formGroup.controls['Nombre_Discapacidad'].disable();
      this.formGroup.controls['Apellidos_Discapacidad'].disable();
      this.formGroup.controls['Parentesco_Discapacidad'].disable();
    }
  }
}
