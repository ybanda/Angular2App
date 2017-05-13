import {Router,RouterModule} from '@angular/router';

import {LearningComponent} from './learnings.component';

import {PageNotFoundComponent} from './page-notfound.component';
import {PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service';
import {AuthGuard} from './auth-guard.service';

export const routing =RouterModule.forRoot([
  { path :'learnings',
    component:LearningComponent,
    canActivate:[AuthGuard],
    canDeactivate:[PreventUnsavedChangesGuard]},
  { path: '',redirectTo: '/learnings',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
]);