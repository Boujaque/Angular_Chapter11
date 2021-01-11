import { AdminAuthGuard } from './Chapter11_Project/services/admin-auth-guard.service';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { OrderService } from './Chapter11_Project/services/order.service';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './Chapter11_Project/helpers/fake-backend';
import { AuthService } from './Chapter11_Project/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './Chapter11_Project/home/home.component';
import { LoginComponent } from './Chapter11_Project/login/login.component';
import { SignupComponent } from './Chapter11_Project/signup/signup.component';
import { AdminComponent } from './Chapter11_Project/admin/admin.component';
import { NotFoundComponent } from './Chapter11_Project/not-found/not-found.component';
import { NoAccessComponent } from './Chapter11_Project/no-access/no-access.component';
import { Chapter11Component } from './Chapter11_Lessons/chapter11.component';
import { AuthGuard } from './Chapter11_Project/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    Chapter11Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
         path: 'admin',
       component: AdminComponent,
       canActivate: [AuthGuard,
                      AdminAuthGuard] //  one ore more route guards
      },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent }
    ])
  ],
  providers: [
    OrderService, 
    AuthService,
    AuthGuard,
    AdminAuthGuard, // register as provider

    // For creating a mock back-end. You don't need these in a real app. 
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
