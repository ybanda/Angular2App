"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const albums_component_1 = require("./albums.component");
exports.albumsRouting = router_1.RouterModule.forRoot([
    { path: 'albums', component: albums_component_1.AlbumsComponent },
    { path: 'album/:id', component: albums_component_1.AlbumsComponent },
    { path: '', redirectTo: '/learnings', pathMatch: 'full' }
]);
//# sourceMappingURL=albums.routing.js.map