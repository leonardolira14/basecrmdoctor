import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cbase',
  templateUrl: './cbase.component.html',
  styleUrls: ['./cbase.component.scss']
})
export class CbaseComponent implements OnInit {
  public menu_active = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  ver_menu() {
    // tslint:disable-next-line: no-unused-expression
    (this.menu_active) ? this.menu_active = false : this.menu_active = true;
    console.log(this.menu_active);
  }
  ir_menu(ir) {
    this.router.navigateByUrl('/' + ir);
  }
}
