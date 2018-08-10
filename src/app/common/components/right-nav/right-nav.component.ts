import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.css']
})
export class RightNavComponent implements OnInit {
  public newsList: any;
  /*// 保存关键字
  @Output() public question =  new EventEmitter<string>();
  @Output() public eventBtn =  new EventEmitter<any>();*/
  constructor(
    private logins: LoginService
  ) {}

  ngOnInit() {
    this.logins.getNewsRecommend().subscribe(
      (val) => {
        console.log(val);
        this.newsList = val;
      }
    );
  }
 /* public onClick(): void {
    this.eventBtn.emit(this.keyWord);
  }*/

}
