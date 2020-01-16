import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatDatepickerInputEvent, DateAdapter } from '@angular/material';
import {  DoctoresService} from '../../../services/doctores.service';
@Component({
  selector: 'app-cformmedico',
  templateUrl: './cformmedico.component.html',
  styleUrls: ['./cformmedico.component.scss']
})
export class CformmedicoComponent implements OnInit {
  public modal_especialidad = false;
  public modal_horarios = false;
  public horas = ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '0:00'];
  public message: any;
  public filemarcalogo: File = null;
  public imagePath;
  public imglogo: any = '/assets/img/elgestor.png';
  public sniper = false;
  public model_data = {};
  public list_consultas = [];
  public list_especialidades = [];
  public list_dia_consulta = [];
  public input_specialidad = {Cedula: '', Institucion: '', Especialidad: ''};
  public input_hora_inicio_consulta: any;
  public input_hora_fin_consulta: any;
  public fecha_nacimiento: any;
  formGroup: FormGroup;
  interests: any;
  private lista_prepara = [];
  constructor(
    private formBuilder: FormBuilder,
    private _adapter: DateAdapter<any>,
    private http: DoctoresService
  ) {
    this._adapter.setLocale('es');
    this.interests = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    this.formGroup = this.formBuilder.group({
      Nombre: ['', Validators.required],
      ApellidoMaterno: ['', Validators.required],
      ApellidoPaterno: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      Edad: ['', Validators.min(20)],
      Email: ['', Validators.required],
      Sexo: ['', Validators.required],
      Curp: [''],
      RFC: ['', Validators.required],
      Telefono: ['', Validators.required],
      Movil: ['', Validators.required],
      Unidad_Medica: ['', Validators.required],
      Especialidad: ['', Validators.required],
      Cedula: ['', Validators.required],
      Institucion_Cedula: ['', Validators.required],
    });
  }

  ngOnInit() {
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

  // funcion para guardar especialidaddes
  onsaveespcialidad() {
    if (this.input_specialidad['Especialidad'] === '') {
      Swal.fire('Error', 'Ingresa una especialidad', 'error');
      return false;
    }
    this.list_especialidades.push({ Especialidad: this.input_specialidad['Especialidad'], Cedula: this.input_specialidad['Cedula'], Institucion: this.input_specialidad['Institucion'] });
    this.input_specialidad = { Cedula: '', Institucion: '', Especialidad: '' };
    console.log(this.list_especialidades);
  }
  // funcion para guardar dias de consulta
  onsavediaconsulta(evento, intr) {
    if (evento.checked) {
      this.lista_prepara.push(this.interests[intr]);
    } else {
      this.lista_prepara.forEach((resp, i) => {
        if (resp === this.interests[intr]) {
          this.lista_prepara.splice(i, 1);
          return;
        }
      });
    }
  }
  onsavediaconsultalista() {
    if (this.input_hora_inicio_consulta === '') {
      Swal.fire('Error', 'Ingresa un horario de inicio de consultas', 'error');
      return false;
    }
    if (this.input_hora_fin_consulta === '') {
      Swal.fire('Error', 'Ingresa un horario de fin de consultas', 'error');
      return false;
    }
    this.list_dia_consulta.push({ dias: this.lista_prepara, hora_Inicio: this.input_hora_inicio_consulta, hora_Fin: this.input_hora_fin_consulta, label: this.lista_prepara + ' (' + this.input_hora_inicio_consulta + '-' + this.input_hora_fin_consulta + ')' });
    this.lista_prepara = [];
    this.input_hora_inicio_consulta = '';
    this.input_hora_fin_consulta = '';
    console.log(this.list_dia_consulta);
  }
  OnsaveForm() {
    this.formGroup.addControl('Dias_Consulta', new FormControl(JSON.stringify(this.list_dia_consulta)));
    this.formGroup.addControl('Especialidades', new FormControl(JSON.stringify(this.list_especialidades)));
    if (this.formGroup.valid) {
      this.sniper = true;
      this.http.save_data(this.formGroup.value)
        .subscribe(data => {
          if (this.filemarcalogo) {
            this.updatefoto(data['id']);
          } else {
            this.sniper = false;
            Swal.fire('Alerta', 'El Medico se registro sin foto', 'info');
            this.onclear();
          }
        }, error => {
          console.log(error);
        });
    } else {
      Swal.fire('Error', 'Hay campos invalidos en el formulario', 'info');
    }
  }
  onclear_especialidad() {
    this.input_hora_inicio_consulta = '';
    this.input_hora_fin_consulta = '';
  }
  onclear() {
    this.formGroup.reset();
    this.list_especialidades = [];
    this.lista_prepara = [];
    this.list_dia_consulta = [];
    this.list_consultas = [];
    this.imglogo = '/assets/img/elgestor.png';
  }
  // funcion para subir la imagen
  updatefoto(doctor) {
    this.sniper = true;
    const formdata = new FormData();
    if (this.filemarcalogo) {
      formdata.append('IDDoctor', doctor);
      formdata.append('logo', this.filemarcalogo, this.filemarcalogo.name);
      this.http.saveimg(formdata)
        .subscribe(data => {
          this.sniper = false;
          if (data['status'] === true) {
            Swal.fire('Exito', 'Medico Registrado.', 'success');
            this.onclear();
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
  // funcion para eliminar una especialidad
  deleteespecial(i) {
    this.list_especialidades.splice(i, 1);
  }

  // funcion para eliminar
  delete_dia_consulta(i) {
    this.list_dia_consulta.splice(i, 1);
  }
  first(d, m, y) {
    console.log(d, m, y);
    this.fecha_nacimiento = d + '-' + m + '-' + y;
    const hoy = new Date();
    const cumpleanos = new Date(this.fecha_nacimiento);
    let edad = hoy.getFullYear() - y;
    const mes = hoy.getMonth() - m;

    if (mes < 0 || (mes === 0 && hoy.getDate() < d)) {
      edad--;
    }

    this.formGroup.controls['Edad'].setValue(edad);
    return;
  }
}
