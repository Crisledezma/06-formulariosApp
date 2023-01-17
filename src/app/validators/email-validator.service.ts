import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  url:string = 'http://localhost:3000/usuarios?q='

  constructor(
    public http: HttpClient
  ) { }

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    const email = control.value;
    return this.http.get<any[]>(`${this.url}${email}`)
      .pipe(
        delay( 3000 ),
        map(
        resp => { return ( resp.length === 0 ) ? null : { emailTomado: true } }
      )
    )
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }


}
