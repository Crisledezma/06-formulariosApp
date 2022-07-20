import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Play Station 5'),
  //   precio: new FormControl(300000),
  //   existencias: new FormControl(225)
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: [null,[Validators.required, Validators.minLength(3)]],
    precio: [null,[Validators.min(1),Validators.required]],
    existencias: [null,[Validators.min(0),Validators.required]]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'PlayStation 5',
      precio: 300000,
      existencias: 225
    })
  }

  campoNoValido(campo:string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar() {

    this.miFormulario.markAllAsTouched();
    if (this.miFormulario.invalid) { return }
    
    this.miFormulario.reset();
  }
}
