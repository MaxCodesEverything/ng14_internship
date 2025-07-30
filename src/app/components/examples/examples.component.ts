import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ArrayMethod } from 'src/assets/interfaces/array-methods.interface';

@Component({
  standalone: true,
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  imports: [CommonModule]
})
export class ExamplesComponent implements OnInit{

  constructor(private httpService: HttpService){}

  arrayMethods: ArrayMethod[] = [];

  ngOnInit() {
        this.httpService.getArrayMethods().subscribe(data => {
            this.arrayMethods = data;
            console.log(this.arrayMethods);
        })
    }
}
