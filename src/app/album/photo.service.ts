import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoService {
    // private headers = new Headers(
    //     [{'Content-Type': 'application/json'},
    //     {'Access-Control-Allow-Origin':'http://192.168.1.3:8080'},
    //      {'Access-Control-Allow-Methods': 'GET'},
    //     {'Accept': 'application/json'}]);
    // private options = new RequestOptions({ headers: this.headers });
    // private _url = "http://localhost:3000/albums.json";
   private _url = 'http://jsonplaceholder.typicode.com/albums';


    constructor(private _http: Http){
    }

    getAlbums() {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    getPhotos(id){
        return this._http.get(this._url + '/' + id + '/photos')
            .map(res => res.json());
    }


}