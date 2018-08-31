import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public linkLInk: any;
  constructor(
    private logins: LoginService
  ) { }

  ngOnInit() {
    this.logins.getLink({start: 0, length: 5}).subscribe(
      (value) => {
        this.linkLInk = value.data;
      }
    );
  }

}
