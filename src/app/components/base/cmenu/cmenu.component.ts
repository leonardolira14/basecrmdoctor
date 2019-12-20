import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cmenu',
  templateUrl: './cmenu.component.html',
  styleUrls: ['./cmenu.component.scss']
})
export class CmenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
 
}
