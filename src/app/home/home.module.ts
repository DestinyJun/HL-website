import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home.routing.module';
import {SharedModule} from '../common/shared.module';
import { HomeComponent } from './home.component';
import {HeaderComponent} from './header/header.component';
import {HeaderService} from '../common/services/header.service';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  declarations: [HomeComponent, HeaderComponent],
  providers: []
})
export class HomeModule { }
