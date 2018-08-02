import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../../common/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public test: any;
  public name: string;
  public navList = [
    {name: '首页', url: '/home'},
    {name: '关于我们', url: '/home/about'},
    {name: '新闻中心', url: '/home/list'},
    {name: '案例介绍', url: '/home/case'},
    {name: '联系我们', url: '/home/contact'},
  ];
  public  routerList = ['/home', '/home/about', '/home/list', '/home/list', '/home/about'];
  constructor(
    private http: HttpClient,
    private logins: LoginService
  ) { }

  ngOnInit() {
    // 头部导航数据
   /*this.logins.getNavs().subscribe(
      (value) => {
        this.test = value;
        this.test.values[0].map((val, index) => {
          this.navList.push({name: val, url: this.routerList[index]});
        });
        // this.navList = this.test.values[0];
        console.log(this.navList);
      }
    );*/
  }
  putName(name) {
    this.name = name;
  }
}
