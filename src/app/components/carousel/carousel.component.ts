import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Images } from "src/assets/interfaces/images.interface";

@Component({
    standalone: true,
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    imports: [CommonModule, FormsModule]
})

export class CarouselComponent implements OnInit{

    selectedIndex: number = 0;
    intervalId: any;
    autoScroll: boolean = false;
    hasControlDots: boolean = true;
    hasControlArrows: boolean = true;
    autoScrollTimer: number = 3000;

    ngOnInit(): void {
        if(this.autoScroll){
            this.startAutoScroll();
        }
    }

    //Здесь хранятся все данные, но лучше в будущем перекинуть их в родительский компонент(разные карусели)
    images: Images[] = [
        {
            imgSrc: '../../../assets/img/istockphoto-471926619-612x612.jpg',
            imgAlt: 'nature 1'
        },
        {
            imgSrc: '../../../assets/img/istockphoto-517188688-612x612.jpg',
            imgAlt: 'nature 2'
        },
        {
            imgSrc: '../../../assets/img/water-8100724_1280.jpg',
            imgAlt: 'nature 3'
        }
    ];

    startAutoScroll(){
        if(this.autoScroll){
            this.intervalId = setInterval(() => {
                this.onNextBtn();
            }, this.autoScrollTimer);
        }
    }

    stopAutoScroll(){
        clearInterval(this.intervalId);
    }

    toggleAutoScroll(){
        this.autoScroll = !this.autoScroll;
        if(this.autoScroll){
            this.startAutoScroll();
        }
        else{
            this.stopAutoScroll();
        }
    }

    onDotClick(index: number){
        this.selectedIndex = index;
    }

    toggleDots(){
        this.hasControlDots = !this.hasControlDots;
    }

    toggleArrows(){
        this.hasControlArrows = !this.hasControlArrows;
    }

    updateTimer(){
        if(this.autoScroll){
            this.stopAutoScroll();
            this.startAutoScroll();
        }
    }

    onPrevBtn(){
        this.selectedIndex--;

        if(this.selectedIndex < 0){
            this.selectedIndex = this.images.length - 1;
        }
    }

    onNextBtn(){
        this.selectedIndex++;

        if(this.selectedIndex > this.images.length - 1){
            this.selectedIndex = 0;
        }
    }
}