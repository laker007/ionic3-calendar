# ionic3-calendar

![image](https://github.com/laker007/ionic3-calendar/blob/master/calendar.png?raw=true)"

## Using

- npm install ionic3-calendar --save (in ionic project folder)
- in app.module.ts

``` javascript
import { CalendarModule } from 'ionic3-calendar';

  @NgModule({
    ...
  imports: [
    ...
    CalendarModule,
    ...
  ]
    ...
  })
```

- Push component to anywhere you want to display it

  `<ion-calendar #calendar></ion-calendar>`

- Go Today

  `<button ion-button clear (click)="calendar.today()">Today</button>`

- Click The Day And Get The Day

  `<ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar>`

- In The End

  Restart Ionic Serve

## Update

- 31st July 2017

  Update README FILE

- 29th July 2017:

  Fix Bug:
  The Right Way To Get The Day: 

  `<ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar>`

  Sorry for my mistake.

- 28th July 2017:   Thanks For Smartisan Designer-[Here is the link](https://dribbble.com/smartisan_design)