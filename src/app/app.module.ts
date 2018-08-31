import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app.routing.module';
import {AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import {HeaderService} from './services/header.service';
import {LocalStorageService} from './services/local-storage.service';
import {LoginService} from './services/login.service';
import {SharedModule} from './common/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    LoginService,
    LocalStorageService,
    HeaderService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
