import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-intergalactic',
  templateUrl: './intergalactic.component.html',
  styleUrls: ['./intergalactic.component.css']
})
export class IntergalacticComponent implements OnInit {

  angForm: FormGroup;
  txtLarge: any;
  txtBreadth: any;
  txtTall: any;
  c3: any;
  price: any;
  imagenes = "assets/img/box-clipart.png";



  calcularPrecio() {
    this.txtLarge = this.angForm.controls['large'].value;
    this.txtBreadth = this.angForm.controls['breadth'].value;
    this.txtTall = this.angForm.controls['tall'].value;
    this.c3 = this.txtTall * this.txtBreadth * this.txtLarge;
    this.price = this.c3*0.99;
    this.alerta(this.price);
  }

  alerta(price){
    Swal.fire(
        'Gracias!!',
        'El precio de tu envio es: '+price+' $USD',
        'success'
    );
  }

  constructor(private fb: FormBuilder) {
    console.log("AppComponent::constructor");
    this.createForm();
  }

  createForm() {

    console.log("AppComponent::createForm");
    this.angForm = this.fb.group({
      large: ["", Validators.required],
      breadth: ["", Validators.required],
      tall: ["", Validators.required],
      dateInter: ["", Validators.required]
    });
    this.angForm.controls["large"].valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  onSubmit() {
    if (this.angForm.valid) {
      console.log(this.angForm.value);
      this.calcularPrecio();
    } else {
      Swal.fire(
        'Error!!',
        'Por favor llenar todos los campos',
        'error'
    );  
    }
  }
  ngOnInit(): void {
  }

}
