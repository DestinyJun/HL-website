import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {AboutRoutingModule} from './about.routing.module';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }