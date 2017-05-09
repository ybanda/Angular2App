import {BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule}  from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {AppComponent }   from './app.component';
import {AuthorsComponent} from './authors.component';
import {AutoGrowDirective} from'./auto-grow.directive';
import {AlbumsComponent} from './album/albums.component';
// import {AlbumComponent} from './album.component';
import {CourseComponent} from './courses.component';
import {ConditionalStatementComponent} from './conditionals.template';
import {ChangePasswordFormComponent} from './changePassword-form.component'
import {ContactFormComponent} from './contact-form.component';
import {ContactComponent} from './contact/contact.component';
import {ExplicitFormComponent} from './explicit-form.component';
import {Favorite} from './favorite.component';
import {GithubComponent} from './github.component';
import {LearningComponent} from './learnings.component';
import {PageNotFoundComponent} from './page-notfound.component'
import {SummaryPipe} from './summary.pipe';
import {SubscriptionFormComponent} from './subscription-form.component';
import {TwitterComponent} from './twitter.component';
import {Voter} from './voter.component';
import {ZippyComponent} from './zippy.component';

import {AuthorService} from './author.service';
import {CourseService} from './course.service';
import {TwitterService} from './twitter.service';

import {routing} from './app.routing';
import {contactRouting} from './contact/contacts.routing';
import {albumsRouting} from './album/albums.routing';

// const appRoutes :Routes=[
//   { path :'learnings',component:LearningComponent},
//   { path :'albums',component:AlbumsComponent},
//   { path :'album/:id',component:AlbumsComponent},
//   { path :'contact',component:ContactComponent},
// //{ path: '',redirectTo: '/albums',pathMatch: 'full'},
//   { path: '',redirectTo: '/learnings',pathMatch: 'full'},
//   { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  imports:      [ BrowserModule,FormsModule,
                  ReactiveFormsModule,
                  HttpModule,
                  albumsRouting,
                  //RouterModule.forRoot(appRoutes),
                   contactRouting,
                    routing],
  declarations: [AppComponent, AlbumsComponent,
                  AuthorsComponent ,AutoGrowDirective,
                  ContactComponent,CourseComponent,
                  ConditionalStatementComponent,ContactFormComponent,
                  ChangePasswordFormComponent,
                  ExplicitFormComponent,Favorite,
                  GithubComponent,LearningComponent,PageNotFoundComponent,
                  SummaryPipe,SubscriptionFormComponent,
                  TwitterComponent,Voter,
                  ZippyComponent
                ],
  providers:    [ AuthorService,CourseService,TwitterService],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
 }
