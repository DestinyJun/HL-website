import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../common/services/login.service';
import {HeaderService} from '../../common/services/header.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // 表单
  public titleFilter: FormControl = new FormControl();
  public keyWord: string;
  public picture: string;
  public newsList: any;
  public startNumber = 0;
  public paginationShow = true;
  public newsShow = false;
  public sum: number;
  constructor(
    private logins: LoginService, private header: HeaderService
  ) { }

  ngOnInit() {
    // 搜索
    this.titleFilter.valueChanges
      .debounceTime(10)
      .subscribe(
        (value) => {
          this.keyWord = value;
          console.log(value);
        }
      );
    this.header.name.next('新闻中心');
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
        this.newsList = [];
        this.newsList = value.data.news;
        this.sum = Math.ceil(value.data.sumCounts / 3);
      });
  }
  public onClick(): void {
    this.logins.getNewsSearch({question: this.keyWord}).subscribe(
      (value) => {
        this.paginationShow = false;
        this.newsList = [];
        this.newsList = value.data;
        console.log(value.data === null);
        if (value.data === null) {
          this.newsShow = true;
        } else {
          this.newsShow = false;
        }
      }
    );
  }
  public followPageAccept(e) {
    this.startNumber = (e - 1) * 3;
    this.logins.getNews({start: this.startNumber, length: 3}).subscribe(
      (value) => {
        this.newsList = [];
        this.newsList = value.data.news;
      });
  }

}
