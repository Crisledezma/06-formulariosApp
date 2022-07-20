import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'Play Station 5',
    precio: 10,
    existencias: 10
  }

  nombreValido():boolean {
    return this.miFormulario?.controls['producto']?.invalid &&
           this.miFormulario?.controls['producto']?.touched;
  }

  precioinValido():boolean {
    return this.miFormulario?.controls['precio']?.touched
      && this.miFormulario.controls['precio']?.value >= 0
      && this.miFormulario.controls['precio']?.value == '';
  }

  guardar() {
    console.log(this.miFormulario)
    this.miFormulario.resetForm({
      producto: 'PlayStation5',
      precio: 0,
      existencias: 0
    });
  }

}
