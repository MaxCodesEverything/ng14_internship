import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appCalendarDirective]',
    standalone: true
})

export class CalendarDirective implements OnChanges{
    @Input() appCalendarDirective!: {year: number, month: number, day: number} | null;

    constructor(private el: ElementRef, private renderer: Renderer2){}

    ngOnChanges() {
        this.checkToday();
    }

    checkToday(){
         this.renderer.removeClass(this.el.nativeElement, 'todayDate');

        const today = new Date();
        if(
            this.appCalendarDirective?.day === today.getDate() &&
            this.appCalendarDirective?.month === today.getMonth() &&
            this.appCalendarDirective?.year === today.getFullYear()
        ){
            this.renderer.addClass(this.el.nativeElement, 'todayDate')
        }
    }  
}