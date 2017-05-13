"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const photo_service_1 = require("./photo.service");
const router_1 = require("@angular/router");
let AlbumsComponent = class AlbumsComponent {
    constructor(_photoService, _route) {
        this._photoService = _photoService;
        this._route = _route;
        this.isLoading = true;
    }
    ngOnInit() {
        //    this.subscription= this._route.params.subscribe(params=>{
        //             this.id=+params["id"];
        //         });
        this.id = this._route.snapshot.params["id"];
        this._photoService.getAlbums()
            .subscribe(albums => {
            this.isLoading = false;
            this.albums = albums;
        });
    }
    ngOnDestroy() {
        // this.subscription.unsubscribe();
        //this.id.unsubscribe();
    }
};
AlbumsComponent = __decorate([
    core_1.Component({
        template: `
        <h1>Albums</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <ul>
        <h2> Photo Details {{id}}</h2>
            <li *ngFor="let album of albums">
                <a routerLink="['album',{id:album.id}]">
                    {{ album.title }}
                </a>
            </li> 
        </ul>
    `,
        providers: [photo_service_1.PhotoService, http_1.HttpModule]
    }),
    __metadata("design:paramtypes", [photo_service_1.PhotoService, router_1.ActivatedRoute])
], AlbumsComponent);
exports.AlbumsComponent = AlbumsComponent;
//# sourceMappingURL=albums.component.js.map