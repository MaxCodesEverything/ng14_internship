import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { CalendarDirective } from 'src/app/directives/calendar-directive.directive';

@Component({
    standalone: true,
    selector: 'app-calendar-day',
    templateUrl: './calendar-day.component.html',
    styleUrls: ['./calendar-day.component.scss'],
    imports: [CalendarDirective, CommonModule]
})

export class CalendarDayComponent{
    @Input() day !: number | null;
    @Input() monthIndex !: number;
    @Input() year !: number;

    @Input() highlightToday: boolean = true;
    @Input() highlightWeekends: boolean = false;
    @Input() dayOfWeekIndex!: number;
}