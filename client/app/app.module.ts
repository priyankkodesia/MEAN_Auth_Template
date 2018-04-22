import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {LoginComponent} from "./Authentication/Login/login.component";
import {SignupComponent} from "./Authentication/Signup/signup.component";

@NgModule({
    declarations: [AppComponent,
    LoginComponent,
    SignupComponent,

    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}