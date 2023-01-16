import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Mortal Kombat'],
      ['Spiderman']
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray
  }

  constructor(private fb: FormBuilder) { }
  
  campoNoValido( campo:string ) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar() {
    this.miFormulario.markAllAsTouched();
    if (this.miFormulario.invalid) { return }
    this.miFormulario.reset();
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) { return; }
    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  borrar(i:number) {
    this.favoritosArr.removeAt(i);
  }

}
