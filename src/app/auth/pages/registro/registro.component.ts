import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidatorService } from 'src/app/validators/form-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre  : [ '', [Validators.required, Validators.pattern(this.val.nombreApellidoPattern) ] ],
    email   : [ '', [Validators.required, Validators.pattern(this.val.emailPattern) ] ],
    username: [ '', [Validators.required, this.val.noPuedeSerCrisledezma ] ],
  } )

  constructor(
    private fb : FormBuilder,
    private val: FormValidatorService
  ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre  : 'Cristian Ledezma',
      email   : 'crisledezma@gmail.com',
      username: 'Crisledezma'
    })
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched()
  }

}
