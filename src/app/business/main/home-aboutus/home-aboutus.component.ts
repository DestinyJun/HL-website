import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../../../common/services/login.service';

@Component({
  selector: 'app-home-aboutus',
  templateUrl: './home-aboutus.component.html',
  styleUrls: ['./home-aboutus.component.css']
})
export class HomeAboutusComponent implements OnInit, OnChanges {
  public companyTro: string;
  public opacityCarousel = 0;
  @Input() h: number;
  @Input() aboutShow: boolean;
  constructor(
    private http: HttpClient,
    private logins: LoginService
  ) { }

  ngOnInit() {
    console.log(this.aboutShow);
    this.logins.getAbouts({start: 0, length: 1}).subscribe(
      (value) => {
          this.companyTro = value.data[0].companySummarize;
      }
    );


  }
  ngOnChanges(): void {
    if (this.aboutShow) {
      this.opacityCarousel = 1;
    }
  }

}
