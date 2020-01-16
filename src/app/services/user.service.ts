import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string = environment.urlserver;
  public datos_usuario: any = [];
  constructor(
    private http: HttpClient,
    private cookie_service: CookieService
  ) {
    if (this.cookie_service.get('datos_usuario')) {
      this.datos_usuario = JSON.parse(this.cookie_service.get('datos_usuario'));
    }
   }

  // funcion para el login
  login(datos) {
    return this.http.post(this.url + 'login', datos);
  }
}
