import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../common/services/login.service';
import {HeaderService} from '../../common/services/header.service';
// import {start} from 'repl';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public picture: string;
  public title: Array<string>;
  public bool: string;
  public person: any;
  public project: any;
  public aboutCase: any;
  public programme: Array<Programme>;
  constructor(
    private logins: LoginService, private header: HeaderService
  ) {
    this.programme = [];
  }

  toggleTitle(title) {
    this.bool = title;
  }
  ngOnInit() {
    this.header.name.next('关于我们');
    this.title = ['公司基本情况', '主要人员', '主要设计实施的项目', '未来规划'];
    this.bool = '公司基本情况';
    this.logins.getAbouts({start: 0, length: 1}).subscribe(
      (value) => {
      }
    );
    this.logins.getPersons({start: 0, length: 2}).subscribe(
      (value) => {
        this.person = value.data;
      }
    );
    // 主要设计实施的项目
    this.logins.getProject({start: 0, length: 3}).subscribe(
      (value) => {
        this.project = value.data;
      }
    );
    // 未来规划
    this.logins.getProgramme({start: 0, length: 1}).subscribe(
      (value) => {
        this.programme = value['data'];
      }
    );
    this.logins.getBanner({start: 0, length: 5}).subscribe(
      value => {
        let a: any;
        a = value.data.filter(
          (element) => {
               if (element.pageName === '关于我们') {
                 return true;
               } else {
                 return false;
               }
          }
        );
        this.picture = a[0].pageUrl;
      });

  }

}
class Programme {
  companyAddress: string;
  companyLatitude: string;
  companyLongitude: string;
  companyName: string;
  companyPhone: string;
  companySummarize: string;
  email: string;
  futurePlan: string;
  id: string;
  insertTime: string;
  parentId: string;
  planContent: string;
  postcode: string;
  status: string;
  updateTime: string;
}
