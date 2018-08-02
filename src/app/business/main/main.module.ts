import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MainComponent } from './main.component';
import {MainRoutingModule} from './main.routing.module';
import {HomeAboutusComponent} from './home-aboutus/home-aboutus.component';
import {HomeCaseComponent} from './home-case/home-case.component';
import {HomeNewsComponent} from './home-news/home-news.component';
import {CarouselModule} from 'ngx-bootstrap';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    CarouselModule.forRoot()

  ],
  declarations: [MainComponent, HomeAboutusComponent, HomeCaseComponent, HomeNewsComponent]
})
export class MainModule { }
