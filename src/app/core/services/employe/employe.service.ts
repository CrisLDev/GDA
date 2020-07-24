import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Employe} from '@shared/interfaces/Employes/Employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  URI = 'http://localhost:4000/api/employes'

  constructor(private http: HttpClient) { }

  getEmployes(): Observable<Employe[]>{
    return this.http.get<Employe[]>(this.URI);
  }

}
