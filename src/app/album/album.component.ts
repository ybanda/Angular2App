import {Component, OnInit} from '@angular/core';
import {HttpModule} from '@angular/http';
import {PhotoService} from './photo.service';
import {RouterModule, Routes, Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    template: `
        <h1>Album</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-7x"></i>
        </div>
        <div>
           <img *ngFor="let photo of photos" src="{{ photo.thumbnailUrl }}">
        </div>
    `,
    providers: [PhotoService, HttpModule]
})
export class AlbumComponent implements OnInit {
    isLoading = true;
    photos;

    constructor(private _photoService: PhotoService
        , private router: Router, private route: ActivatedRoute){
    }

    ngOnInit(){
        this._photoService.getPhotos(this.route.params['id'])
            .subscribe(photos => {
                this.isLoading = false;
                this.photos = photos;
            });
    }
}