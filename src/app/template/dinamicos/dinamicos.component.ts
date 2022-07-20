import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  persona: Persona = {
    nombre: 'Cristian',
    favoritos: [
      {
        id: 1,
        nombre: 'Spiderman'
      },
      {
        id: 2,
        nombre: 'Mortal Kombat'
      }
    ]
  };

  nuevoFavorito: string = '';

  nombreInvalido():boolean {
    return this.miFormulario?.controls['nombre']?.invalid &&
           this.miFormulario?.controls['nombre']?.touched;
  }
  
  guardar() {

    const favorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito
    }

    this.persona.favoritos.push({...favorito});
    this.nuevoFavorito = ''
  }
  
  eliminar(index:number) {
    
    this.persona.favoritos.splice(index, 1);
  }

}
