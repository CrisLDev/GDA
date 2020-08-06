import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Schedule } from '@app/shared/classes/Schedules/Schedules';
import { Observable, scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  URI = 'http://localhost:4000/api/schedules/';

  constructor(
              private http: HttpClient
  ) { }

  createSchedule(schedule: Schedule): Observable<Schedule>{
    return this.http.post<Schedule>(this.URI, schedule);
  }

  getSchedules(): Observable<Schedule[]>{
    return this.http.get<Schedule[]>(this.URI)
  }

  editSchedule(scheduleId: string | number, changes: Partial<Schedule>):Observable<Schedule>{
    return this.http.put<Schedule>(this.URI + scheduleId, changes);
  }

  getSchedule(scheduleId: string): Observable<Schedule>{
    return this.http.get<Schedule>(this.URI + scheduleId);
  }

}
