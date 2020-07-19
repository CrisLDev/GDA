import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('sidenav') sidenav;

  constructor() { }

  ngOnInit(): void {
  }

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

}
