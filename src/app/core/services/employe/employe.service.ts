import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employe, EmployeAdd} from '@shared/interfaces/Employes/Employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  URI = 'http://localhost:4000/api/employes/'

  constructor(private http: HttpClient) { }

  getEmployes(): Observable<Employe[]>{
    return this.http.get<Employe[]>(this.URI);
  }

  getEmploye(employeId: string): Observable<Employe>{
    return this.http.get<Employe>(this.URI + employeId);
  }

  createEmploye(employe: Employe): Observable<Employe>{
    console.log(employe);
    return this.http.post<Employe>(this.URI, employe);
  }

}
