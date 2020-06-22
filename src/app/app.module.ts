import { PostService } from './service/post.service';
import { HttpClientModule } from '@angular/common/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponentComponent } from './new-course-form-component/new-course-form-component.component';
import { PostsComponent } from './posts-component/posts.component';
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    ContactFormComponent,
    NewCourseFormComponentComponent,
    PostsComponent,
    GithubProfileComponent,
    NotFoundComponent,
    HomeComponent,
    NavbarComponent,
    GithubFollowersComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: HomeComponent
      },
      {
        path: 'followers/:username', 
        component: GithubFollowersComponent
      },
      {
        path: 'followers', 
        component: GithubFollowersComponent
      },
      {
        path: 'profile/:username', 
        component: GithubProfileComponent
      },
      {
        path: 'posts', 
        component: PostsComponent
      },
      {
        path: 'login', 
        component: LoginComponent
      },
      {
        path: '**', 
        component: NotFoundComponent
      },
    ])
  ],
  providers: [
    PostService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
