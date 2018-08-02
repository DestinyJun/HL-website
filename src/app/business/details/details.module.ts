import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import {DetailsRoutingModule} from './details.routing.module';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule { }
