import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clista',
  templateUrl: './clista.component.html',
  styleUrls: ['./clista.component.scss']
})
export class ClistaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ir_list(ir) {
    this.router.navigateByUrl('/' + ir);
  }

}
