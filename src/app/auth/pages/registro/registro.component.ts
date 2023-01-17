import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { EmailValidatorService } from 'src/app/validators/email-validator.service';
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
    email   : [ '', [Validators.required, Validators.pattern(this.val.emailPattern) ], [this.emailValidator] ],
    username: ['', [Validators.required, this.val.noPuedeSerCrisledezma]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordVerification: ['', [Validators.required]]
  },{
    validators: [ this.val.camposIguales('password','passwordVerification') ]
  })

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.["required"]) {
      return 'El email es obligatorio.'
    }else if (errors?.["pattern"]) {
      return 'Se requiere un formato de correo electrónico'
    }else if (errors?.["emailTomado"]) {
      return 'El email ya existe en la base de datos.'
    }
    return ''
  };

  constructor(
    private fb : FormBuilder,
    private val: FormValidatorService,
    private emailValidator: EmailValidatorService
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
