import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Schedule } from '@app/shared/classes/Schedules/Schedules';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  URI = 'http://localhost:4000/api/schedules/';

  constructor(
              private http: HttpClient
  ) { }

  createSchedule(schedule: Schedule): Observable<Schedule>{
    console.log('aqui estamos');
    return this.http.post<Schedule>(this.URI, schedule);
  }

}
