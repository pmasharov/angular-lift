import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LiftWayService } from "../_services/lift/lift-way.service"
import { Lift } from "../app.component"
@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  styleUrls: ['./lift.component.sass']
})
export class LiftComponent implements OnInit, OnDestroy {

  @Input() liftParams: Lift = {
    liftHeight: null,
    liftWidth: null,
    liftLeftPos: null,
    liftRightPos: null
  }
  liftHeight: string = null
  liftPosition: string = null
  subscription: Subscription

  constructor(private liftWayService: LiftWayService) {
    this.subscription = this.liftWayService.getWayPoints().subscribe(point => {
      this.liftPosition = point ? `${this.liftParams.liftHeight}%` : `0%`
    })
  }

  ngOnInit(): void {
    this.liftHeight = `${this.liftParams.liftHeight}%`
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
