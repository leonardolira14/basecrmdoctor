import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctoresService } from '../../../services/doctores.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-clista',
  templateUrl: './clista.component.html',
  styleUrls: ['./clista.component.scss']
})
export class ClistaComponent implements OnInit {
  public sniper = false;
  public pageActual = 1;
  public list_doctor = [];
  public server_direc = environment.urlserver;
  constructor(
    private router: Router,
    private http: DoctoresService
  ) { }

  ngOnInit() {
    this.onList();
  }
  onList() {
    this.http.getlistdoctores()
      .subscribe(data => {
        console.log(data);
        this.list_doctor = data['message'];
      }, error => {
        console.log(error);
      });
  }
  ir_list(ir) {
    this.router.navigateByUrl('/' + ir);
  }
  mod_img(img) {
    let foto = '/assets/img/elgestor.png';
    if (img !== 'SN') {
      foto = this.server_direc + 'assets/img/fotospacientes/' + img;
    }
    return 'url(' + foto + ')';
  }

}
