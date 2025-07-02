import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Tasks } from "src/assets/interfaces/tasks.interface";

@Injectable({
    providedIn: 'root'
})
export class HttpService{

    constructor(private http: HttpClient){}

    getData(){
        return this.http.get<Tasks[]>('../assets/json/tasks.json');
    }
}