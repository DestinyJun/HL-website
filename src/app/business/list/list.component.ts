import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../common/services/login.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public picture: string;
  public newsList: any;
  public startNumber = 0;
  public sum: number;
  constructor(
    private logins: LoginService
  ) { }

  ngOnInit() {
    this.logins.getBanner({start: 0, length: 5}).subscribe(
      value => {
        let a: any;
        a = value.data.filter(
          (element) => {
            if (element.pageName === '新闻中心') {
              return true;
            } else {
              return false;
            }
          }
        );
        this.picture = a[0].pageUrl;
      });
    this.logins.getNews({start: this.startNumber, length: 3}).subscribe(
      (value) => {
        // console.log(value);
        this.newsList = [];
        this.newsList = value.data.news;
        this.sum = Math.ceil(value.data.sumCounts / 3);
        // console.log(this.sum);
      });
  }

  public followPageAccept(e) {
    this.startNumber = (e - 1) * 3;
    this.logins.getNews({start: this.startNumber, length: 3}).subscribe(
      (value) => {
        this.newsList = [];
        this.newsList = value.data.news;
        // console.log( this.newsList);
      });
  }

}
