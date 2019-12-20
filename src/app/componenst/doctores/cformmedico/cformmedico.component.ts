import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cformmedico',
  templateUrl: './cformmedico.component.html',
  styleUrls: ['./cformmedico.component.scss']
})
export class CformmedicoComponent implements OnInit {
  public modal_especialidad = false;
  public modal_horarios = false;
  public horas = ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '0:00'];
  constructor() { }

  ngOnInit() {
  }

}
