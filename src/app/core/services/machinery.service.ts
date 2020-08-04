import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Machinery} from '@shared/clases/Machinery/machinery';

@Injectable({
  providedIn: 'root'
})
export class MachineryService {

  constructor(private http: HttpClient) { }

  URI = 'http://localhost:4000/api/machineries/';

  createMachinery(machinery: Machinery): Observable<Machinery>{
    const fd = new FormData();
    fd.append('name', machinery.name);
    fd.append('brand', machinery.brand);
    fd.append('weight', machinery.weight);
    fd.append('status', machinery.status);
    fd.append('description', machinery.description);
    fd.append('image', machinery.image);
    console.log('hola gente');
    return this.http.post<Machinery>(this.URI, fd);
  }

  getMachineries(): Observable<Machinery[]>{
    return this.http.get<Machinery[]>(this.URI);
  }

}
