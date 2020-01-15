import { Component } from '@angular/core';
export interface Floor {
  id: number
  label: string
  value: number
  called: boolean
  height: string
}
export interface Lift {
  liftHeight: string
  liftWidth: string
  liftLeftPos: string
  liftRightPos: string
}
export interface Mine {
  mineHeight: string
  mineWidth: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  appTitle = 'angular-lift';
  floorsCount: number = null

  public floors: Floor[] = []
  public liftParams: Lift = {
    liftHeight: null,
    liftWidth: null,
    liftLeftPos: null,
    liftRightPos: null
  }
  public mineParams: Mine = {
    mineHeight: null,
    mineWidth: null
  }

  public setParameters = ({ floorsCount, mineWidth, liftWidth }) => {
    const createFloorsArray = ({ floorsCount }) => {
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
      return floors
    }
    this.mineParams = {
      mineHeight: `85vh`,
      mineWidth: `${mineWidth}%`,
    }
    this.liftParams = {
      liftHeight: `${100 / floorsCount}%`,
      liftWidth: `${liftWidth}%`,
      liftLeftPos: `${((100 - liftWidth) / 2)}%`,
      liftRightPos: `${((100 - liftWidth) / 2)}%`
    }
    this.floors = createFloorsArray({ floorsCount })
  }
}
