import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../common/services/login.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  public picture: string;
  public caseList: Array<any>[];
  public startNumber = 0;
  public sum: number;
  public a = [];
  constructor(
    private logins: LoginService
  ) { this.caseList = []; }

  ngOnInit() {
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
     console.log(value);
     this.sum = Math.ceil(value.iTotalRecords / 6);
        let k = [];
        // this.caseList = value.data;
        console.log(value['data'].length);
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
        }
        console.log(this.caseList );
      });
    }
  public followPageAccept(e) {
    this.startNumber = (e - 1) * 6;
    this.logins.getCase({start: this.startNumber, length: 6}).subscribe(
      value => {
        this.caseList = [];
        let k = [];
        // this.caseList = value.data;
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
        }
      });
  }
}
