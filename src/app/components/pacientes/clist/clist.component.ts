import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from '../../../../app/services/pacientes.service';
import { environment} from '../../../../environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-clist',
  templateUrl: './clist.component.html',
  styleUrls: ['./clist.component.scss']
})
export class ClistComponent implements OnInit {
  public sniper = false;
  public lista_pacientes: any[] = [];
  public pageActual = 1;
  public server_direc = environment.urlserver;
  constructor(
    private router: Router,
    private http: PacientesService
  ) { }

  ngOnInit() {
    this.onLista();
  }

  ir_list(ir) {
    this.router.navigateByUrl('/' + ir);
  }
  onLista() {
    this.sniper = true;
    this.http.getdatapacientes()
      .subscribe(data => {
        this.lista_pacientes = data['message'];
        this.sniper = false;
      }, error => {
        console.log(error);
      });
  }
  mod_img(img) {
    let foto = '/assets/img/elgestor.png';
    if (img !== 'S/Foto') {
      foto = this.server_direc + 'assets/img/fotosdoctores/' + img;
    }
    return 'url(' + foto + ')';
  }
  updatestatus(status, Id) {
    this.sniper = true;
    const contrario = (status === '1') ? '0' : '1';
    const datos = { IDPaciente: Id, status: contrario };
    this.http.update_status(datos)
      .subscribe(data => {
        if (data['status']) {
          this.sniper = false;
          Swal.fire('Exito', 'Datos Actualizados', 'success');
          this.onLista();
        } else {
          Swal.fire('Error', data['message'], 'error');
        }
      }, error => {
        console.log(error);
      });
  }
}
