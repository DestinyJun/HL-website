import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../../common/services/login.service';

@Component({
  selector: 'app-home-case',
  templateUrl: './home-case.component.html',
  styleUrls: ['./home-case.component.css']
})
export class HomeCaseComponent implements OnInit {
 /* public caseList = [
    {imgUrl:'/assets/images/1.jpg',caseName:'贵州高投项目',caseSummary:'发GV大家发挥对规划ID规划覅Hi好' },
    {imgUrl:'/assets/images/2.jpg',caseName:'贵州彩铝项目',caseSummary:'放声大哭解放军的烧烤架飞机的咖啡机' },
    {imgUrl:'/assets/images/2.jpg',caseName:'贵州彩铝项目',caseSummary:'放声大哭解放军的烧烤架飞机的咖啡机' },
  ];*/
  @Input() h: number;
  public caseList: any;
  constructor(
    private logins: LoginService
  ) { }

  ngOnInit() {
    this.logins.getCase({start: 0, length: 3}).subscribe(
          (value) => {
            this.caseList = value.data;
        });
  }
}
