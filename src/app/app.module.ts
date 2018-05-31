import {BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule, ErrorHandler, isDevMode}  from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AppComponent }   from './app.component';

import {AuthorsComponent} from './forms/authors.component';
import {AutoGrowDirective} from'./forms/auto-grow.directive';
import {AlbumsComponent} from './album/albums.component';
// import {AlbumComponent} from './album.component';
import {ConditionalStatementComponent} from './shared/conditionals.template';
import {ChangePasswordFormComponent} from './forms/changePassword-form.component';
import {ContactFormComponent} from './contact/contact-form.component';
import {ContactComponent} from './contact/contact.component';
import {ExplicitFormComponent} from './forms/explicit-form.component';
import {Favorite} from './forms/favorite.component';
import {GithubComponent} from './shared/github.component';
import {HomeComponent} from './home/home.component';
import {LearningComponent} from './shared/learnings.component';
import {LoggerService} from './core/logger.service';
import {NavBarComponent} from './navbar/navbar.component';
import { NewCourseFormComponent } from './forms/new-course-form.component';
import {PageNotFoundComponent} from './page-notfound.component';
import {PostsComponent} from './posts/posts.component';
import {PaginationComponent} from './shared/pagination.component';
import {SummaryPipe} from './shared/summary.pipe';
import {SpinnerLoadComponent} from './shared/spinner.component';
import {SubscriptionFormComponent} from './forms/subscription-form.component';
import {TwitterComponent} from './twitter/twitter.component';
import {UsersComponent} from './users/users.component';
import {UserAddComponent} from './users/users-add.component';
import {Voter} from './forms/voter.component';
import {ZippyComponent} from './forms/zippy.component';

import {AuthorService} from './forms/author.service';
import {AuthGuard} from './forms/auth-guard.service';
import {AuthService} from './home/auth.service';
import {TwitterService} from './twitter/twitter.service';
import {PreventUnsavedChangesGuard} from './users/prevent-unsaved-changes-guard.service';

import {routing} from './app.routing';
import {contactRouting} from './contact/contacts.routing';
import {albumsRouting} from './album/albums.routing';
import {homeRouting} from './home/home.routing';
import {postRouting} from './posts/posts.routing';
import {usersRouting} from './users/users.routing';
import {CoursesModule} from './courseModule/courses.module';
import { AppErrorHandler } from './shared/validators/app-error-handler';
import { PostGenericService } from './shared/services/post.genericService';
import {INITIAL_STATE, IAppState,rootReducer } from './shared/store';
import {fromJS,Map} from 'immutable';
import { AlbumComponent } from './album/album.component';
import {NgRedux,NgReduxModule, DevToolsExtension} from 'ng2-redux';
// const appRoutes :Routes=[
//   { path :'learnings',component:LearningComponent},
//   { path :'albums',component:AlbumsComponent},
//   { path :'album/:id',component:AlbumsComponent},
//   { path :'contact',component:ContactComponent},
// //{ path: '',redirectTo: '/albums',pathMatch: 'full'},
//   { path: '',redirectTo: '/learnings/:username',pathMatch: 'full'},
//   { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  imports:      [ NgbModule.forRoot(),
                BrowserModule,
                  FormsModule,
                  ReactiveFormsModule,
                  HttpModule,
                  CoursesModule,
                  NgReduxModule,
                  albumsRouting,
                  //RouterModule.forRoot(appRoutes),
                  contactRouting,
                  homeRouting, postRouting,
                  usersRouting, routing],
  declarations: [ AppComponent, AlbumsComponent, AlbumComponent, AuthorsComponent , AutoGrowDirective,
                  ContactComponent, ConditionalStatementComponent, ContactFormComponent, ChangePasswordFormComponent,
                  ExplicitFormComponent,
                  Favorite,
                  GithubComponent,
                  HomeComponent,
                  LearningComponent,
                  NavBarComponent,
                  PageNotFoundComponent, PostsComponent, PaginationComponent,
                  SummaryPipe, SubscriptionFormComponent, SpinnerLoadComponent,
                  TwitterComponent,
                  UsersComponent, UserAddComponent,
                  NewCourseFormComponent,
                  Voter,
                  ZippyComponent
                ],
  providers:    [ AuthGuard, AuthService, AuthorService,

                 PreventUnsavedChangesGuard, PostGenericService,
                 TwitterService, LoggerService,
                {provide: ErrorHandler , useClass: AppErrorHandler}],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 // constructor(private ngRedux :NgRedux<IAppState>){
  constructor(private ngRedux :NgRedux<Map<string,any>>,
    devTools:DevToolsExtension){

      var enhancer = isDevMode()?[devTools.enhancer()]:[];
    //ngRedux.configureStore(rootReducer,fromJS(INITIAL_STATE),[],enhancer);

 }
}
