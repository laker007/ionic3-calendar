import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Calendar } from './calendar';
@NgModule({
  declarations: [
    Calendar,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Calendar
  ]
})
export class CalendarModule { }