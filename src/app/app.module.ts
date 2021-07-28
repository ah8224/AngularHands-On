import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Handson1Component } from './handson1/handson1.component';
import { Handson2Component } from './handson2/handson2.component';
import { Handson3Component } from './handson3/handson3.component';
import { Handson4Component } from './handson4/handson4.component';
import { Handson5Component } from './handson5/handson5.component';
import { searchPipe } from './handson5/search-pipe';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    Handson1Component,
    Handson2Component,
    Handson3Component,
    Handson4Component,
    Handson5Component,
    searchPipe,
    LoginComponent,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
