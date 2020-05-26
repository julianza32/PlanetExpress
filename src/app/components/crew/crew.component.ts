import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})


export class CrewComponent implements OnInit {



  /*imagenes = ["../../assets/img/amy.png", 
  "../../assets/img/bender.png",
   "../../assets/img/fry.png",
    "../../assets/img/hermes.png",
     "../../assets/img/leela.png",
      "../../assets/img/Scruffy.png",
       "../../assets/img/soiberg.png"];
  nombre = ["Amy", "Bender", "Fry", "Hermes", "Lila", "Scruffy", "Soiberg"]
 */
  constructor() {
    
  }
 
  dataTripulacion: any = [{
    nombre: "Bender",
    imagen: "../../assets/img/bender.png"
  },
  {
    nombre: "Fry",
    imagen: "../../assets/img/fry.png"
  },
  {
    nombre: "Lila",
    imagen: "../../assets/img/leela.png"
  }
  ];


  dataTierra: any = [{
    nombre: "Amy",
    imagen: "../../assets/img/amy.png"
  },
  {
    nombre: "Hermes",
    imagen: "../../assets/img/hermes.png"
  },
  {
    nombre: "Scruffy",
    imagen: "../../assets/img/Scruffy.png"
  },
  {
    nombre: "Soiberg",
    imagen: "../../assets/img/soiberg.png"
  }
  ];

  dataFundador: any = [{
    nombre: "Hubert Farnsworth",
    imagen: "../../assets/img/profesor.png"
  }]

  ngOnInit(): void {

  }

}
