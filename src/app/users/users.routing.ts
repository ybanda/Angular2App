import {Route,RouterModule} from '@angular/router';
import {UsersComponent} from './users.component';
import {UserAddComponent} from './users-add.component';
export const usersRouting =RouterModule.forRoot([
    {path:'users',component:UsersComponent},
    {path:'user/new',component:UserAddComponent},

]);
