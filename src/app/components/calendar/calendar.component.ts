import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CalendarDayComponent } from "../calendar-day/calendar-day.component";

@Component({
  standalone: true,
  selector: 'app-calendar',
  imports: [CommonModule, NgFor, CalendarDayComponent],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  date = new Date;
  currentYear: number = this.date.getFullYear();
  months: string[] = [];
  weekdays: string[] = [];
  calendars: (number | null)[][][] = [];

  monthViewActive: boolean = false;
  selectedMonthIndex: number = 0;

  ngOnInit(): void {
    this.generateCalendar();
    this.generateMonthNames();
    this.generateWeekdayNames();
  }

  trackByFn(index: number): number {
    return index;
  }

  private generateMonthCalendar(year: number, month: number): (number | null)[][] {
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

  private generateCalendar(){
    this.calendars = [];
    for (let month = 0; month < 12; month++) {
      this.calendars.push(this.generateMonthCalendar(this.currentYear, month));
    }
  }

  private generateWeekdayNames(): void {
    const mondayDate = new Date('2024-01-01');

    for (let i = 0; i < 7; i++) {
      const weekday = mondayDate.toLocaleDateString('ru-RU', { weekday: 'short' });
      const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
      this.weekdays.push(capitalizedWeekday);
      mondayDate.setDate(mondayDate.getDate() + 1);
    }
  }

  private generateMonthNames(){
    for(let i = 0; i < 12; i++){
      const newDate = new Date(this.currentYear, i, 1); 
      const monthName = newDate.toLocaleDateString('ru-RU', { month: 'long' });
      const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
      this.months.push(capitalizedMonth);
    }
  }

  onMonthClick(index: number){
    this.monthViewActive = true;
    this.selectedMonthIndex = index;
  }

  onReturnBtn(){
    this.monthViewActive = false;
  }

  onPrevYear(){
    this.currentYear--;
    this.generateCalendar();
  }

  onNextYear(){
    this.currentYear++;
    this.generateCalendar();
  }

  onPrevMonth(){
    if(this.selectedMonthIndex < 1){
      this.onPrevYear();
      this.selectedMonthIndex = 11;
    }
    else{
      this.selectedMonthIndex--;
    }
  }

  onNextMonth(){
    if(this.selectedMonthIndex > 10){
      this.onNextYear();
      this.selectedMonthIndex = 0;
    }
    else{
      this.selectedMonthIndex++;
    }
  }
}
