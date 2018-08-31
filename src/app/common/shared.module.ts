import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgxEchartsModule} from 'ngx-echarts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TreeModule} from 'ng2-tree';
import {CarouselModule} from 'ngx-bootstrap';

import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { CircleComponent } from './components/circle/circle.component';
import { PartingLineComponent } from './components/parting-line/parting-line.component';
import {HomeContactComponent} from './components/home-contact/home-contact.component';
import { BannerComponent } from './components/banner/banner.component';
import { RightNavComponent } from './components/right-nav/right-nav.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    CarouselComponent,
    FooterComponent,
    CircleComponent,
    PartingLineComponent,
    HomeContactComponent,
    BannerComponent,
    RightNavComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule,
    TreeModule,
    CarouselModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    NgxEchartsModule,
    ReactiveFormsModule,
    FormsModule,
    TreeModule,
    BannerComponent,
    CarouselComponent,
    FooterComponent,
    CircleComponent,
    PartingLineComponent,
    HomeContactComponent,
    RightNavComponent,
    PaginationComponent
  ],
  providers: []
})
export class SharedModule { }
