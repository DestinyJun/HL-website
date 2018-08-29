import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../common/services/login.service';
import {HeaderService} from '../../common/services/header.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  // 搜索相关
  public titleFilter: FormControl = new FormControl();
  public keyWord: string;
  public newsShow = false;
  // 分页显示隐藏控制
  public paginationShow = true;
  public picture: string;
  public caseList: Array<any>[];
  public startNumber = 0;
  public sum: number;
  public a = [];
  constructor(
    private logins: LoginService, private header: HeaderService
  ) { this.caseList = []; }

  ngOnInit() {
    // 搜索相关
    this.titleFilter.valueChanges
      .debounceTime(10)
      .subscribe(
        (value) => {
          this.keyWord = value;
          console.log(value);
        }
      );
    this.header.name.next('案列介绍');
    this.logins.getBanner({start: 0, length: 5}).subscribe(
      value => {
        let a: any;
        a = value.data.filter(
          (element) => {
            if (element.pageName === '案例介绍') {
              return true;
            } else {
              return false;
            }
          }
        );
        this.picture = a[0].pageUrl;
      });
    this.logins.getCase({start: this.startNumber, length: 6}).subscribe(
      value => {
     this.caseList = [];
     this.caseList = value.data;
     this.sum = Math.ceil(value.iTotalRecords / 6);
        /*let k = [];
        for (let i = 0; i < value['data'].length; i++) {
          if ( i % 3 !== 0 || i === 0) {
            k.push(value['data'][i]);
          } else {
            this.caseList.push(k);
            k = [];
            k.push(value['data'][i]);
          }
        }
        if (k.length > 0) {
          this.caseList.push(k);
        }*/
      });
    }
  public followPageAccept(e) {
    this.startNumber = (e - 1) * 6;
    this.logins.getCase({start: this.startNumber, length: 6}).subscribe(
      value => {
        this.caseList = value.data;
       /* let k = [];
        for (let i = 0; i < value['data'].length; i++) {
          if ( i % 3 !== 0 || i === 0) {
            k.push(value['data'][i]);
          } else {
            this.caseList.push(k);
            k = [];
            k.push(value['data'][i]);
          }
        }
        if (k.length > 0) {
          this.caseList.push(k);
        }*/
      });
  }
  // 搜索相关点击事件
  public onClick(): void {
    this.logins.getCaseSearch({question: this.keyWord}).subscribe(
      (value) => {
        this.paginationShow = false;
        this.caseList = [];
        console.log(value);
        this.caseList = value.data;
        console.log(value.data.length === 0);
        if (value.data.length === 0) {
          this.newsShow = true;
        } else {
          this.newsShow = false;
        }
      }
    );
  }
}
