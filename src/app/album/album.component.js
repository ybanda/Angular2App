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
let AlbumComponent = class AlbumComponent {
    constructor(_photoService, router, route) {
        this._photoService = _photoService;
        this.router = router;
        this.route = route;
        this.isLoading = true;
    }
    ngOnInit() {
        this._photoService.getPhotos(this.route.params['id'])
            .subscribe(photos => {
            this.isLoading = false;
            this.photos = photos;
        });
    }
};
AlbumComponent = __decorate([
    core_1.Component({
        template: `
        <h1>Album</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div>
            <img *ngFor="let photo of photos" src="{{ photo.thumbnailUrl }}">
        </div>
    `,
        providers: [photo_service_1.PhotoService, http_1.HttpModule]
    }),
    __metadata("design:paramtypes", [photo_service_1.PhotoService,
        router_1.Router, router_1.ActivatedRoute])
], AlbumComponent);
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map