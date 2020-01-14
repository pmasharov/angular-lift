import { Component, OnInit, Input } from '@angular/core';
import { Floors } from '../app.component'
@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.sass']
})
export class MineComponent implements OnInit {

  @Input() floors: Floors[] = []
  @Input() liftHeight: string = ''

  constructor() { }

  ngOnInit() {
  }

}
