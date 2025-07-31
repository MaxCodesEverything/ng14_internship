import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appTodayDirective]',
    standalone: true
})

export class TodayDirective implements OnInit{
    @Input() appTodayDirective!: {year: number, month: number, day: number};

    constructor(private el: ElementRef, private renderer: Renderer2){}

    ngOnInit() {
        this.checkToday();
    }

    checkToday(){
        const today = new Date();
        if(
            this.appTodayDirective.day === today.getDate() &&
            this.appTodayDirective.month === today.getMonth() &&
            this.appTodayDirective.year === today.getFullYear()
        ){
            this.renderer.addClass(this.el.nativeElement, 'todayDate')
        }
    }  
}