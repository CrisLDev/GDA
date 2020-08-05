import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employe} from '@app/shared/classes/Employes/Employe';

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
    const fd = new FormData();
    fd.append('name', employe.name);
    fd.append('last', employe.last);
    fd.append('position', employe.position);
    fd.append('email', employe.email);
    fd.append('age', employe.age);
    fd.append('date', employe.date);
    fd.append('direction', employe.direction);
    fd.append('dni', employe.dni);
    fd.append('city', employe.city);
    fd.append('image', employe.profile);
    return this.http.post<Employe>(this.URI, fd);
  }

  editEmploye( employeId: string | number, changes: Partial<Employe>): Observable<Employe> {
    const fd = new FormData();
    fd.append('name', changes.name);
    fd.append('last', changes.last);
    fd.append('position', changes.position);
    fd.append('email', changes.email);
    fd.append('age', changes.age);
    fd.append('date', changes.date);
    fd.append('direction', changes.direction);
    fd.append('dni', changes.dni);
    fd.append('city', changes.city);
    fd.append('image', changes.profile);
    return this.http.put<Employe>(this.URI + employeId, fd);
  }

  deleteEmploye(employeId: string){
    return this.http.delete(this.URI + employeId);
  }

}
