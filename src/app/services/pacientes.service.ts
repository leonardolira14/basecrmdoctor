import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  public url: string = environment.urlserver;
  public datos_usuario: any = [];
  public headers: any;
  IDPaciente$ = new EventEmitter<String>();
  constructor(
    private http: HttpClient,
    private cookie_service: CookieService
  ) {
    if (this.cookie_service.get('datos_usuario')) {
      this.datos_usuario = JSON.parse(this.cookie_service.get('datos_usuario'));
      this.headers = new HttpHeaders({
        'Authorization': this.datos_usuario['token']
      });
    }
  }
  // funcion para mandar los datos guardar de un paciente
  savedata(datos) {
    return this.http.post(this.url + 'savedatap', datos, { headers: this.headers });
  }
  // funcion para subir la foto de un paciente
  saveimg(datos) {
    return this.http.post(this.url + 'updatefotopaciente', datos, { headers: this.headers });
  }
  // funcion para traer todos los pacientes
  getdatapacientes() {
    return this.http.get(this.url + 'getlispacientes', { headers: this.headers });
  }

  // funcion para soliciar datos de un paciente 
  getDataPaciente(datos) {
    return this.http.post(this.url + 'getdatapacientes', datos, { headers: this.headers });
  }

  // funcion para actualizar informacion del paciente
  updatedata(datos) {
    return this.http.post(this.url + 'updatedatap', datos, { headers: this.headers });
  }

  // funcion para modifar el status de un paciente
  update_status(datos) {
    return this.http.post(this.url + 'updatestatus', datos, { headers: this.headers });
  }
}
