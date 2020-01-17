import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MineComponent } from './mine/mine.component';
import { LiftComponent } from './lift/lift.component';
import { LiftDoorsComponent } from './lift-doors/lift-doors.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { FloorComponent } from './floor/floor.component';

@NgModule({
  declarations: [
    AppComponent,
    MineComponent,
    LiftComponent,
    LiftDoorsComponent,
    CreateFormComponent,
    FloorComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
