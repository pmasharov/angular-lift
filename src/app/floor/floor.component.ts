import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.sass']
})
export class FloorComponent {
  @Input() curFloor: Object = {}

  constructor() { }

  addWayPoint(point: number) {
    console.log(this.curFloor);
  }

}
