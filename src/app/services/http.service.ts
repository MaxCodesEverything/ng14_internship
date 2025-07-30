import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ArrayMethod } from "src/assets/interfaces/array-methods.interface";
import { Tasks } from "src/assets/interfaces/tasks.interface";

@Injectable({
    providedIn: 'root'
})
export class HttpService{

    constructor(private http: HttpClient){}

    getTasks(){
        return this.http.get<Tasks[]>('../assets/json/tasks.json');
    }

    getArrayMethods(){
        return this.http.get<ArrayMethod[]>('../assets/json/array-methods.json');
    }
}