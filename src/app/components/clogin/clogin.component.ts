import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.scss']
})
export class CloginComponent implements OnInit {
  modelo_login: any = {};
  constructor(
    private http: UserService,
    private cookie_service: CookieService,
    private route: Router
  ) { }

  ngOnInit() {
  }
  login() {
    this.http.login(this.modelo_login)
      .subscribe(
        data => {
          if (data['status'] === true) {
            this.cookie_service.set('datos_usuario', JSON.stringify(data['data']));
            this.ir('welcome');
          }
        }
        , error => {
          Swal.fire('Error', error.error.message, 'error');
        }
      );
  }
  ir(ruta) {
    this.route.navigateByUrl('/' + ruta);
  }
}
