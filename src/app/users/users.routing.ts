import {Route,RouterModule} from '@angular/router';
import {UsersComponent} from './users.component';
export const usersRouting =RouterModule.forRoot([
    {
        path:'project1',component:UsersComponent
    }
]);
