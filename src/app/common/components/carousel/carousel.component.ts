import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public photoList: any;
  public carouselList: any;
  public opacityCarousel = 0;
  @Input() h: number;
  @Input() carouselShow: boolean;
  constructor(
    private logins: LoginService
  ) { }

  ngOnInit() {
/*    this.carouselList = [
      {url: '/assets/1.jpg'},
      {url: '/assets/2.jpg'},
      {url: '/assets/3.jpg'},
    ];*/
    if (this.carouselShow) {
      this.opacityCarousel = 1;
    } /*判断轮播图的显示与否*/
    this.logins.getPhoto({start: 0, length: 3}).subscribe(
      (e) => {
        this.photoList = e.data;
      }/*链接轮播图接口，条件满足后设置photoList的内容*/
    );
  }
}
