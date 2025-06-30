import { Component } from '@angular/core';
import { TaskComponent } from "../task/task.component";

@Component({
  standalone: true,
  selector: 'app-etude',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
  imports: [TaskComponent]
})
export class PracticeComponent{

}
