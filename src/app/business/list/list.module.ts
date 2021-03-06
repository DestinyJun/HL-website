import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {ListRoutingModule} from './list.routing.module';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule,
  ],
  declarations: [ListComponent]
})
export class ListModule { }
