import {Component, OnInit} from '@angular/core';
import {HttpModule} from '@angular/http';
import {PhotoService} from './photo.service';

@Component({
    template: `
        <h1>Albums</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <ul>
            <li *ngFor="#album of albums">
                {{ album.title }}
            </li> 
        </ul>
    `,
    providers: [PhotoService, HttpModule]
})
export class AlbumsComponent implements OnInit {
    isLoading = true;
    albums;

    constructor(private _photoService: PhotoService){
    }
    
    ngOnInit(){
        this._photoService.getAlbums()
            .subscribe(albums => {
                this.isLoading = false;
                this.albums = albums;
            });
    }
}