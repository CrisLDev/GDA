import { Component, OnInit, ViewChild } from '@angular/core';
import {MENU} from '@shared/shared.data';
import {UsersComponent} from './components/users/users.component';
import {MatDialog} from '@angular/material/dialog';
import {loginWithGoogle, signOutGoogle} from '@core/firebase/firebase';
import {AuthService} from '@core/services/auth/auth.service'
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('sidenav') sidenav;

  constructor(public dialog:MatDialog, public authService: AuthService) { }

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

  loginGoogle(){
    loginWithGoogle().then(async (user) => {
      localStorage.setItem('email', user.email);
      localStorage.setItem('name', user.displayName);
    });
  }

  clearStorage(){
    localStorage.removeItem('email');
      localStorage.removeItem('name');
  }

  async logoutGoogle(){
    await signOutGoogle();
    await this.clearStorage();
  }

}
