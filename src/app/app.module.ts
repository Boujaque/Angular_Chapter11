import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { OrderService } from './Chapter11_Project/services/order.service';
import { AdminAuthGuard } from './Chapter11_Project/services/admin-auth-guard.service';
import { AuthGuard } from './Chapter11_Project/services/auth-guard.service';
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
import { Chapter11Component } from './chapter11/chapter11.component';

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token'
  }), http);
}

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
      { path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent }
    ])
  ],
  providers: [
    OrderService,

    AuthService,
    AuthGuard,
    AdminAuthGuard,
    AuthHttp,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },

    // For creating a mock back-end. You don't need these in a real app. 
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
