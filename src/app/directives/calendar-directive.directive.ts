import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appCalendarDirective]',
    standalone: true
})

export class CalendarDirective implements OnInit{
    @Input() appCalendarDirective!: {year: number, month: number, day: number};

    constructor(private el: ElementRef, private renderer: Renderer2){}

    ngOnInit() {
        const today = new Date();
        if(
            this.appCalendarDirective.day === today.getDate() &&
            this.appCalendarDirective.month === today.getMonth() &&
            this.appCalendarDirective.year === today.getFullYear()
        ){
            this.renderer.addClass(this.el.nativeElement, 'todayDate')
        }
    }

}