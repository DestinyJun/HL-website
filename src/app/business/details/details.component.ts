import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../common/services/login.service';
import {ActivatedRoute, Params} from '@angular/router';

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
  constructor(
    private logins: LoginService,
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.routerInfo.snapshot.queryParams['id'];
    this.name = this.routerInfo.snapshot.queryParams['name'];
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
        console.log(a[0].pageUrl);
        this.picture = a[0].pageUrl;
      });
    if (this.name === '新闻中心') {
      this.logins.getOnlyNew({id: this.id}).subscribe(
        (val) => {
          console.log(val);
          this.a = val;
        }
      );
    } else if (this.name === '案例介绍') {
      this.logins.getCases({id: this.id}).subscribe(
        (val) => {
          console.log(val);
          this.a = val;
        }
      );
    }

  }

}
