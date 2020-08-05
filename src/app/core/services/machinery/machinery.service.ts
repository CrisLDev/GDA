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

  getMachinery(machineryId: string): Observable<Machinery>{
    return this.http.get<Machinery>(this.URI + machineryId);
  }

  editMachinery(machineryId: string | number, changes: Partial<Machinery>): Observable<Machinery>{
    const fd = new FormData();
    fd.append('name', changes.name);
    fd.append('brand', changes.brand);
    fd.append('weight', changes.weight);
    fd.append('status', changes.status);
    fd.append('description', changes.description);
    fd.append('image', changes.image);

    return this.http.put<Machinery>(this.URI + machineryId, fd);
  }

  deleteMachinery(machineryId: string){
    return this.http.delete(this.URI + machineryId)
  }

}
