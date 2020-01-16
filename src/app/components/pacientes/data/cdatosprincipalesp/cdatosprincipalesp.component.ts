import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { DateAdapter } from '@angular/material/';
import Swal from 'sweetalert2';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
@Component({
  selector: 'app-cdatosprincipalesp',
  templateUrl: './cdatosprincipalesp.component.html',
  styleUrls: ['./cdatosprincipalesp.component.scss']
})
export class CdatosprincipalespComponent implements OnInit {
  public ruta_servidor = environment.urlserver;
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
  public ID_Paciente: any;
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
      Edad: ['', { disabled: true }],
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
    });
    this.datos_usuario = JSON.parse(this.cookie_service.get('datos_usuario'));
    this.http.IDPaciente$.subscribe(data => {
      this.ID_Paciente = data;
    });
   }

  ngOnInit() {
    this.activar_inputs(false);
    this.onsolicitedData();
  }
  onsolicitedData() {
    const datos = { IDPaciente: this.ID_Paciente };
    this.http.getDataPaciente(datos)
      .subscribe(data => {
        console.log(data);
        if (data['data']['datos_paciente']['Foto']!=='S/Foto') {
          this.imglogo = this.ruta_servidor + 'assets/img/fotospacientes/' + data['data']['datos_paciente']['Foto'];
        }
        this.formGroup.controls['Nombre'].setValue(data['data']['datos_paciente']['Nombre']);
        this.formGroup.controls['ApellidoPaterno'].setValue(data['data']['datos_paciente']['Apellido_Pat']);
        this.formGroup.controls['ApellidoMaterno'].setValue(data['data']['datos_paciente']['Apellido_Mat']);
        this.formGroup.controls['Edad'].setValue(data['data']['datos_paciente']['Edad']);
        this.formGroup.controls['FechaNacimiento'].setValue(data['data']['datos_paciente']['Fecha_Nacimiento']);
        this.formGroup.controls['Curp'].setValue(data['data']['datos_paciente']['Curp']);
        this.formGroup.controls['ExpedienteAnteriro'].setValue(data['data']['datos_paciente']['NumExpedienteAnterior']);
        this.formGroup.controls['Telefono'].setValue(data['data']['datos_paciente']['Telefono']);
        this.formGroup.controls['Movil'].setValue(data['data']['datos_paciente']['Movil']);
        this.formGroup.controls['Sexo'].setValue(data['data']['datos_paciente']['Sexo']);
        this.formGroup.controls['Email'].setValue(data['data']['datos_paciente']['Email']);
        this.formGroup.controls['Grupo_Sanguineo'].setValue(data['data']['datos_paciente']['Grupo_Sanguineo']);

        this.formGroup.controls['Calle'].setValue(data['data']['direccion_paciente']['Calle_Y_Numero']);
        this.formGroup.controls['Colonia'].setValue(data['data']['direccion_paciente']['Colonia']);
        this.formGroup.controls['Municipio'].setValue(data['data']['direccion_paciente']['Municipio']);
        this.formGroup.controls['Estado'].setValue(data['data']['direccion_paciente']['Estado']);
        this.formGroup.controls['Codigo_Postal'].setValue(data['data']['direccion_paciente']['CP']);
        
        this.formGroup.controls['Nombre_Emergecia'].setValue(data['data']['datos_emergencia']['Nombre']);
        this.formGroup.controls['Apellidos_Emergecia'].setValue(data['data']['datos_emergencia']['Apellidos']);
        this.formGroup.controls['Parentesco_Emergecia'].setValue(data['data']['datos_emergencia']['Parentesco']);
        this.formGroup.controls['Telefono_Emergecia'].setValue(data['data']['datos_emergencia']['Telefono']);
        this.formGroup.controls['Movil_Emergecia'].setValue(data['data']['datos_emergencia']['Movil']);
        this.formGroup.controls['Email_Emergecia'].setValue(data['data']['datos_emergencia']['Correo']);
        if (data['data']['datos_paciente']['Discapacitado']==='0') {
          this.formGroup.controls['Discapacidad'].setValue(false);
        } else {
          this.formGroup.controls['Discapacidad'].setValue(true);
          this.activar_inputs(true);
          this.formGroup.controls['Causa_Discapacidad'].setValue(data['data']['datos_discapacidad']['Causa']);
          this.formGroup.controls['Nombre_Discapacidad'].setValue(data['data']['datos_discapacidad']['Nombre']);
          this.formGroup.controls['Apellidos_Discapacidad'].setValue(data['data']['datos_discapacidad']['Apellidos']);
          this.formGroup.controls['Parentesco_Discapacidad'].setValue(data['data']['datos_discapacidad']['Parentesco']);
        }
      });
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
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    const dia = (event.value['_i'].date < 10) ? '0' + event.value['_i'].date : event.value['_i'].date;
    const mes = event.value['_i'].month + 1;
    const year = event.value['_i'].year;
    this.fecha_nacimiento = dia + '-' + mes + '-' + year;
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
      this.formGroup.addControl('IDPaciente', new FormControl(this.ID_Paciente));
      this.http.updatedata(this.formGroup.value)
        .subscribe(data => {
          if (this.filemarcalogo) {
            this.updatefoto(data['id']);
          } else {
            this.sniper = false;
            Swal.fire('Alerta', 'El paciente se registro sin foto', 'info');
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
      this.pregunta_subir_foto();
    };
    this.sniper = false;
  }
  pregunta_subir_foto() {
    Swal.fire({
      title: 'Actualizando Foto',
      text: 'Esta seguro de Modficiar esta foto.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Actualizar!'
    }).then((result) => {
      if (result.value) {
        this.updatefoto(this.ID_Paciente);
      }
    });
  }
  // funcion para subir la imagen 
  updatefoto(Paciente) {
    this.sniper = true;
    const formdata = new FormData();
    if (this.filemarcalogo) {
      formdata.append('IDPaciente', Paciente);
      formdata.append('logo', this.filemarcalogo, this.filemarcalogo.name);
      this.http.saveimg(formdata)
        .subscribe(data => {
          this.sniper = false;
          if (data['status'] === true) {
            Swal.fire('Exito', 'Paciente Registrado.', 'success');
            this.imagePath.values('');
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
}
