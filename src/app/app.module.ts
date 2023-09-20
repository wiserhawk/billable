import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/components/header/header.component';
import { LeftNavigationComponent } from './public/components/left-navigation/left-navigation.component';
import { ProfilePanelComponent } from './public/components/profile-panel/profile-panel.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { LoginComponent } from './public/pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './public/pages/home/home.component';
import { NewOrgComponent } from './secure/pages/new-org/new-org.component';
import { AuthInterceptor } from './secure/configs/auth.interceptor';
import { SignupComponent } from './public/pages/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'org/new', component:NewOrgComponent},
] 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavigationComponent,
    ProfilePanelComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NewOrgComponent,
    SignupComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
