import { Component } from '@angular/core';

export interface Floors {
  id: number
  label: string
  value: number
  called: boolean
  height: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  appTitle = 'angular-lift';
  createFloorsArray = ({ floorsCount }) => {
    let floors = []
    for (let i = 0; i < floorsCount; i++) {
      floors.push({
        id: i,
        label: `${i + 1}`,
        value: i + 1,
        called: false,
        height: `${100 / floorsCount}%`
      })
    }
    console.log(floors);
    return floors
  }
  floorsCount: number = 9
  public liftHeight: string = `${100 / this.floorsCount}%`
  public floors: Floors[] = this.createFloorsArray({ floorsCount: this.floorsCount })
}
