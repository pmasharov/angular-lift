import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  styleUrls: ['./lift.component.sass']
})
export class LiftComponent implements OnInit {

  @Input() liftHeight: string = ''

  constructor() { }

  ngOnInit() {
  }

}
