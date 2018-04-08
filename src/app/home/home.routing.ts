import {Route, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';

export const  homeRouting = RouterModule.forChild(
    [
        {path: 'home', component: HomeComponent}]
);