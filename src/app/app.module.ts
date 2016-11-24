import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { UserProfileComponent } from './user/user-profile.component';
import { UserFormComponent } from './user/user-form.component';
import { NotifierComponent } from './notifier/notifier.component';

import { NotifierService  } from './notifier/notifier.service';

// Application wide providers
const APP_PROVIDERS = [
  NotifierService
];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserFormComponent,
    NotifierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [APP_PROVIDERS],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
