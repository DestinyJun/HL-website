import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public photoList: any;
  public opacityCarousel = 0;
  @Input() h: number;
  @Input() carouselShow: boolean;
  constructor(
    private logins: LoginService
  ) { }

  ngOnInit() {
    if (this.carouselShow) {
      this.opacityCarousel = 1;
    }
    this.logins.getPhoto({start: 0, length: 3}).subscribe(
      (e) => {
        this.photoList = e.data;
      }
    );
  }

}
