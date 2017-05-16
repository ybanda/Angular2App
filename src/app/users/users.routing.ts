import {Route,RouterModule} from '@angular/router';

import {PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service';
import {UsersComponent} from './users.component';
import {UserAddComponent} from './users-add.component';
export const usersRouting =RouterModule.forRoot([
    {path:'users',component:UsersComponent},
    {path:'user/new',component:UserAddComponent
            ,canDeactivate:[PreventUnsavedChangesGuard]},

]);
