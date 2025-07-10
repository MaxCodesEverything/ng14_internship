import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Images } from "src/assets/interfaces/images.interface";

@Component({
    standalone: true,
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    imports: [CommonModule]
})

export class CarouselComponent implements OnInit{

    selectedIndex: number = 0;
    autoScroll: boolean = false;

    ngOnInit(): void {
        if(this.autoScroll){
            setInterval(() => {
                this.onNextBtn();
            }, 3000);
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

    onDotClick(index: number){
        this.selectedIndex = index;
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