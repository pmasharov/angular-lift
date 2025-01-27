import { Component, OnInit, Input } from '@angular/core';
import { Floor } from '../app.component'
@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.sass']
})
export class MineComponent implements OnInit {

  @Input() floors: Floor[] = []
  @Input() liftParams: Object = {}
  @Input() mineParams: Object = {}

  constructor() { }

  ngOnInit() {
  }

}
