import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { appendFile } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  headers: Headers = new Headers();
  options: any;

  constructor() {  
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','appliaction/json');
    this.headers.append('X-Requested-With','XmlHttpRequest');

    this.options = new RequestOptions({headers:this.headers});
   }
}
