import {Router,RouterModule} from '@angular/router';

import {LearningComponent} from './learnings.component';

import {PageNotFoundComponent} from './page-notfound.component';

export const routing =RouterModule.forRoot([
  { path :'learnings',component:LearningComponent},
  { path: '',redirectTo: '/learnings',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
]);