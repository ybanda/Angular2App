import {Router, RouterModule} from '@angular/router';

import {LearningComponent} from './shared/learnings.component';

import {PageNotFoundComponent} from './page-notfound.component';
import {PreventUnsavedChangesGuard} from './users/prevent-unsaved-changes-guard.service';
import {AuthGuard} from './forms/auth-guard.service';

export const routing = RouterModule.forRoot([
  { path : 'learnings',
    component: LearningComponent,
    canActivate: [AuthGuard]},
  { path: '', redirectTo: '/learnings', pathMatch: 'full'},
  { path: 'nonexistent', redirectTo: '/learnings', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
]);