import { Component, OnInit } from '@angular/core';
import {MENU} from '@shared/shared.data';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent implements OnInit {

  menu=MENU;

  constructor() { }

  ngOnInit(): void {
  }

}
