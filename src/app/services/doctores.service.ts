import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class DoctoresService {
  public url: string = environment.urlserver;
  public datos_usuario: any = [];
  public headers: any;
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

  // funcion para salvar los datos de un dorcto
  save_data(datos) {
    return this.http.post(this.url + 'savedatadoctor', datos, { headers: this.headers });
  }
  // funcion para subir la foto de un paciente
  saveimg(datos) {
    return this.http.post(this.url + 'updatefotodoctor', datos, { headers: this.headers });
  }

  // funcion para traer todos los doctores
  getlistdoctores() {
    return this.http.get(this.url + 'getlisdoctor', { headers: this.headers });
  }
}
