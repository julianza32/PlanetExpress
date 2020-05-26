import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  audio = "assets/audio/Sound.mp3"
  scrHeight: any;
  scrWidth: any;
  claseTitulo: string;
  claseFondo: any;
  naveImagen = "assets/img/nave3.jpg"
  ngOnInit(): void {
  }


  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    return (this.scrHeight, this.scrWidth);
  }
  over(){
  this.claseFondo="interior";
  }

  out(){
    this.claseFondo="";  
  }

  constructor() {
    this.getScreenSize();

    if (this.scrWidth > 583) {
      this.claseTitulo = ""
    } else {
      this.claseTitulo = "flow-text";
    }
  }
}

