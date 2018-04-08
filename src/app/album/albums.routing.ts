import {Router, RouterModule} from '@angular/router';
import {AlbumsComponent} from './albums.component';

export const albumsRouting = RouterModule.forRoot([
  { path : 'albums', component: AlbumsComponent},
  { path : 'album/:id', component: AlbumsComponent},
  { path: '', redirectTo: '/learnings', pathMatch: 'full'}
]);