import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from './cita';
import {map,filter} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CitesService {

  constructor(private http: HttpClient) { }

  citesURL = '/assets/cites.json';
  usuari: string;

  getCites(): Observable<Cita[]>{
    this.usuari= localStorage.getItem('login');
    return this.http.get<{cites: Cita[]}>(this.citesURL).pipe(
      map(response => response.cites.filter(c => c.client === this.usuari))
      );
  }

  getCita(id:string): Observable<Cita>{
    return this.http.get<{cites: Cita[]}>(this.citesURL).pipe(
      map(response => response.cites.filter(c => c.id === id)[0])
      );
  }

}
