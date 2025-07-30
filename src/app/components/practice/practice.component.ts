import { Component, OnInit } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { HttpService } from 'src/app/services/http.service';
import { Tasks } from 'src/assets/interfaces/tasks.interface';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-etude',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
  imports: [TaskComponent, CommonModule]
})
export class PracticeComponent implements OnInit{

  constructor(private httpService: HttpService){}

    tasks: Tasks[] = []; 

    ngOnInit() {
        this.httpService.getTasks().subscribe(data => {
            this.tasks = data;
            console.log(this.tasks)
        })
    }
}
