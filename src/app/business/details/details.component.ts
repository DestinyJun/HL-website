import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public picture: string;
  public id: number;
  public name: string;
  public a: any;
  // public readCount: number;
  constructor(
    private logins: LoginService,
    private routerInfo: ActivatedRoute,
    private header: HeaderService
  ) { }

  ngOnInit() {
    this.id = this.routerInfo.snapshot.queryParams['id'];
    this.name = this.routerInfo.snapshot.queryParams['name'];
    this.header.name.next(this.name);
    this.logins.getBanner({start: 0, length: 5}).subscribe(
      value => {
        let a: any;
        a = value.data.filter(
          (element) => {
            if (element.pageName === this.name) {
              return true;
            } else {
              return false;
            }
          }
        );
        this.picture = a[0].pageUrl;
      });
    if (this.name === '新闻中心') {
      this.logins.getOnlyNew({id: this.id}).subscribe(
        (val) => {
          this.a = val;
          this.logins.addNewsCount({id: this.id});
        }
      );
    } else if (this.name === '案例介绍') {
      this.logins.getCases({id: this.id}).subscribe(
        (val) => {
          this.a = val;
        }
      );
    }

  }

}
