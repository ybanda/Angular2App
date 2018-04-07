import {Component,Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Post} from '../post';
import { Observable } from 'rxjs/Observable';
import { BadInput } from '../../shared/validators/bad-input';
import { NotFoundError } from '../../shared/validators/not-found-error';
import { AppError } from '../../shared/validators/app-error';

@Injectable()
export class DataService{

    constructor(private http:Http , private url:string){

    }
    getAll(){
    //   return  this.http.get(this.url)
    //           .catch(this.handleError);
    return  this.http.get(this.url)
    .map(response=>response.json())
    .catch(this.handleError);
    }
     
   create(resource){
       return this.http.post(this.url,JSON.stringify(resource))
       .map(response=>response.json())
       .catch(this.handleError);
   }
    update(resource){
        return this.http.patch(this.url+"/"+resource.id,JSON.stringify({isRead:true}))
        .map(response=>response.json())        
        .catch(this.handleError);
    }
    delete(id){
        return this.http.delete(this.url+"/"+id)
        .map(response=>response.json())
        .catch(this.handleError);
    }

private handleError(error:Response){
    if(error.status==404)
        return Observable.throw(new NotFoundError(error.json()));
    else if(error.status ===400)
        return Observable.throw(new BadInput(error.json()));
    else 
        return Observable.throw( new AppError(error.json()));
}
}