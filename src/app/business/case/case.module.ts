import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseComponent } from './case.component';
import {CaseRoutingModule} from './case.routing.module';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CaseRoutingModule,
    SharedModule
  ],
  declarations: [CaseComponent]
})
export class CaseModule { }
