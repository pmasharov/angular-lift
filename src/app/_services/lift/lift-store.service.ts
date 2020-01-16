import { Injectable } from '@angular/core';

export class LiftState {
  public liftPositions: number[] = []
}

@Injectable()
export class LiftStoreService extends Store<LiftState> {
  constructor() {
    super(new LiftState());
  }

  public addLiftPosition(payload: number): void {
    this.setState({
      ...this.state,
      liftPositions: [...this.state.liftPositions, payload]
    });
  }
}
