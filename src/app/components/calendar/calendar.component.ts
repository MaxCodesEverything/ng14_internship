import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-calendar',
  imports: [CommonModule, NgFor],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  currentYear: number = new Date().getFullYear();
  months: string[] = [
      'Январь', 'Февраль', 'Март', 'Апрель',
      'Май', 'Июнь', 'Июль', 'Август',
      'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];;
  calendars: (number | null)[][][] = [];

  ngOnInit(): void {
    for (let month = 0; month < 12; month++) {
      this.calendars.push(this.generateMonthCalendar(this.currentYear, month));
    }

    console.log(this.calendars);
  }

  generateMonthCalendar(year: number, month: number): (number | null)[][] {
    const weeks: (number | null)[][] = [];
    const date = new Date(year, month, 1);
    const firstDay = (date.getDay() + 6) % 7; 
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let week: (number | null)[] = new Array(firstDay).fill(null);
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
    if (week.length > 0) {
      while (week.length < 7) week.push(null);
      weeks.push(week);
    }

    return weeks;
  }
}
