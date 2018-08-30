import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../../common/services/login.service';

@Component({
  selector: 'app-home-case',
  templateUrl: './home-case.component.html',
  styleUrls: ['./home-case.component.css']
})
export class HomeCaseComponent implements OnInit {
  @Input() h: number;
  public caseList: any;
  constructor(
    private logins: LoginService
  ) { }

  ngOnInit() {
    this.logins.getCase({start: 0, length: 6}).subscribe(
          (value) => {
            this.caseList = value.data;
        });
  }
}
