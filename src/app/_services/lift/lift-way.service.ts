import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LiftWayService {

  private subject = new Subject<any>()

  addWayPoint(point: number) {
    this.subject.next(point)
  }

  clearWayPoints() {
    this.subject.next();
  }

  getWayPoints(): Observable<any> {
    return this.subject.asObservable();
  }

}
