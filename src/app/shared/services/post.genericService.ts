
import { Component,Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class PostGenericService extends DataService{
     
    constructor(http:Http){
        super(http,"http://jsonplaceholder.typicode.com/posts");
        
    }
}