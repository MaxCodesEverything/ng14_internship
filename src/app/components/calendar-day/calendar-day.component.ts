import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TodayDirective } from 'src/app/directives/today-directive.directive';

@Component({
    standalone: true,
    selector: 'app-calendar-day',
    templateUrl: './calendar-day.component.html',
    styleUrls: ['./calendar-day.component.scss'],
    imports: [TodayDirective, CommonModule]
})

export class CalendarDayComponent{
    @Input() day !: number | null;
    @Input() monthIndex !: number;
    @Input() year !: number;
}