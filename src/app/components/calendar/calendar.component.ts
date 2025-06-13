import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  currentYear: number = new Date().getFullYear();
  months: string[] = [];

  ngOnInit(): void {
    this.months = [
      'Январь', 'Февраль', 'Март', 'Апрель',
      'Май', 'Июнь', 'Июль', 'Август',
      'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
  }

}
