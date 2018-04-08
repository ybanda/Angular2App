import {Component, OnInit, OnDestroy} from '@angular/core';
import {HttpModule} from '@angular/http';
import {PhotoService} from './photo.service';
import {RouterModule, Routes, Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Component({
    template: `
        <h1>Albums</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <ul>
        <h2> Photo Details {{id}}</h2>
            <li *ngFor="let album of albums">
                <a [routerLink]="['/album',album.id]">
                    {{ album.title }}
                </a>
            </li> 
        </ul>
    `,
      providers: [PhotoService, HttpModule]
})
export class AlbumsComponent implements OnInit, OnDestroy {
    isLoading = true;
    albums;
    id;
    subscription;

    constructor(private _photoService:
         PhotoService, private _route: ActivatedRoute){

    }

    ngOnInit(){
        Observable.combineLatest([
            this._route.paramMap,
            this._route.queryParamMap
        ])

        .subscribe(combined => {
            const page = combined[0].get('page');
            const order = combined[1].get('order');

        });
    //    this.subscription= this._route.params.subscribe(params=>{
    //             this.id=+params["id"];
    //         });
        this.id = this._route.snapshot.params['page'];
const order = this._route.snapshot.params['order'];
console.log('Order = ' + order + ' Id =' + this.id);
        this._photoService.getAlbums()
            .subscribe(albums => {
                this.isLoading = false;
                this.albums = albums;
            });

    }
    ngOnDestroy(){
       // this.subscription.unsubscribe();
       //this.id.unsubscribe();
    }
}