import { Component, OnInit, Input } from '@angular/core';
import { LiftWayService } from "../_services/lift/lift-way.service"

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.sass']
})
export class FloorComponent {
  @Input() curFloor: any = {}

  constructor(private liftWayService: LiftWayService) { }

  addWayPoint() {
    const point = this.curFloor.id
    console.log(this.curFloor);
    this.liftWayService.addWayPoint(point)
  }

}
