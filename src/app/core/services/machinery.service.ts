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

    return this.http.post<Machinery>(this.URI, fd);
  }

}
