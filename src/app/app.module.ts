import { TokenInterceptorService } from './service/token-interceptor.service';
import { PostService } from './service/post.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { RouterModule, } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { LoginComponent } from './login/login.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { RegisterComponent } from './register/register.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';
import { PassChangerComponent } from './pass-changer/pass-changer.component';
import { UserWorkComponent } from './user-work/user-work.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { CompetitionComponent } from './competition/competition.component';
import { CompetitionManagerComponent } from './competition-manager/competition-manager.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


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
    LoginComponent,
    RegisterComponent,
    UserDetailComponent,
    RecoverPassComponent,
    PassChangerComponent,
    UserWorkComponent,
    CompetitionComponent,
    UserPanelComponent,
    CompetitionManagerComponent,
    ConfirmationComponent

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
        path: 'followers/:userid/:username',
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
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'logout',
        component: LoginComponent
      },
      {
        path: 'userDetail',
        component: UserDetailComponent
      },
      {
        path: 'recoverPass',
        component: RecoverPassComponent
      },
      {
        path: 'passChanger/:code',
        component: PassChangerComponent
      },
      {
        path: 'userPanel',
        component: UserPanelComponent
      },
      {
        path: 'userWork',
        component: UserWorkComponent
      },
      {
        path: 'confirmation/:code',
        component: ConfirmationComponent
      },
      {
        path: 'CompetitionManager/:id',
        component: CompetitionManagerComponent
      },
      {
        path: 'competition/:id',
        component: CompetitionComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ])
  ],
  providers: [
    PostService,
    CoursesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
