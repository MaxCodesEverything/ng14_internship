import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { Tasks } from "src/assets/interfaces/tasks.interface";

@Component({
    standalone: true,
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    imports: [CommonModule]
})
export class TaskComponent{

    isOpen: boolean = false;

    toggle(){
        this.isOpen = !this.isOpen;
    }

}