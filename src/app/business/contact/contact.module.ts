import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {ContactRoutingModule} from './contact.routing.module';
import {SharedModule} from '../../common/shared.module';
import {HeaderService} from '../../common/services/header.service';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ],
  declarations: [ContactComponent],
  providers: []
})
export class ContactModule { }
