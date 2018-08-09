import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../../common/services/login.service';
import {HeaderService} from '../../common/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public test: any;
  name = '首页';
  public navList = [
    {name: '首页', url: '/home'},
    {name: '关于我们', url: '/home/about'},
    {name: '新闻中心', url: '/home/list'},
    {name: '案例介绍', url: '/home/case'},
    {name: '联系我们', url: '/home/contact'},
  ];
  public  routerList = ['/home', '/home/about', '/home/list', '/home/list', '/home/about'];
  constructor(
    private http: HttpClient, private logins: LoginService,
    private header: HeaderService
  ) {
    this.header.name.subscribe(
      (name) => {
      this.name = name;
    });
  }

  ngOnInit() {
  }
  pullName(name) {
    this.name = name;
  }
}
