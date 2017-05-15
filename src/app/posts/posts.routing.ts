import {Route,RouterModule} from '@angular/router';
import {PostsComponent} from './posts.component'
export const postRouting =RouterModule.forChild(
    [{
        path:'posts',component:PostsComponent
    }]);