import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerCrisledezma( control: FormControl ) {
    const valor = control.value?.trim().toLowerCase();
    console.log(valor);
    if (valor == 'crisledezma') {
      return { noCrisledezma : true }
    } else {
      return null;
    }
  }
}
