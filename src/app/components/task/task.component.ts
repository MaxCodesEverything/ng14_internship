import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    imports: [CommonModule]
})
export class TaskComponent {
    isOpen: boolean = false;

    toggle(){
        this.isOpen = !this.isOpen;
    }
}