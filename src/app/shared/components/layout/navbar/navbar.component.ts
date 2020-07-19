import { Component, OnInit, ViewChild } from '@angular/core';
import {MENU} from '@shared/shared.data';
import {UsersComponent} from './components/users/users.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('sidenav') sidenav;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  menu=MENU;

  reason = '';

  check:boolean = false;

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
    this.check=false;
  }

  openContent(){
    this.sidenav.open();
    if(this.check==false){
      this.check=true;
    }else{
      this.check=false;
    }
  }

  openDialog() {
    this.dialog.open(UsersComponent);
  }

}
