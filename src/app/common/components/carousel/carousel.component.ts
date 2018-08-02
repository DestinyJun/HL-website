import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public photoList: any;
  @Input() h: number;
  constructor(
    private logins: LoginService
  ) { }

  ngOnInit() {
    this.logins.getPhoto({start: 0, length: 3}).subscribe(
      (e) => {
        this.photoList = e.data;
      }
    );
  }

}
