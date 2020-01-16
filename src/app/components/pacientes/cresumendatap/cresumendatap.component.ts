import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PacientesService } from '../../../services/pacientes.service';
@Component({
  selector: 'app-cresumendatap',
  templateUrl: './cresumendatap.component.html',
  styleUrls: ['./cresumendatap.component.scss']
})
export class CresumendatapComponent implements OnInit {
  ID_Paciente: any ;
  constructor(
    private rutaActiva: ActivatedRoute,
    private services: PacientesService
  ) { }

  ngOnInit() {
    this.ID_Paciente = this.rutaActiva.snapshot.params.idpaciente;
    this.services.IDPaciente$.emit(this.ID_Paciente);
  }

}
