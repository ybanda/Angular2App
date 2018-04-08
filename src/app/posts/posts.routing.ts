import {Route, RouterModule} from '@angular/router';

import {PreventUnsavedChangesGuard} from '../users/prevent-unsaved-changes-guard.service';
import {PostsComponent} from './posts.component';
export const postRouting = RouterModule.forChild(
    [{
        path: 'posts', component: PostsComponent
    }]);