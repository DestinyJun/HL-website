import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.css']
})
export class HomeNewsComponent implements OnInit {
  @Input() h: number;
  public flag  = true;
  public newsList: any;
  public qusitionList: any;
  public newsPhotoList: any;
  constructor(
    private logins: LoginService
  ) { }

  ngOnInit() {
    // 这里是首页新闻
    this.logins.getNews({start: 0, length: 3}).subscribe(
      (e) => {
        this.newsList = e.data.news;
      }
    );
    // 这里是轮播新闻
    this.logins.getNews({start: 0, length: 3}).subscribe(
      (e) => {
        this.newsPhotoList = e.data.news;
      }
    );
    this.logins.getRefer({start: 0, length: 3}).subscribe(
      (e) => {
        this.qusitionList = e.data;
      }
    );
  }
 public clickNews(e, y): void {
   if (!this.flag) {
     y.style.backgroundColor = '#1F6FE5';
     e.srcElement.style.backgroundColor = '#F74D34';
     this.flag = true;
   }
 }
 public clickQuestion(e, y): void {
   if (this.flag) {
       y.style.backgroundColor = '#1F6FE5';
       e.srcElement.style.backgroundColor = '#F74D34';
     this.flag = false;
   }
 }
}
