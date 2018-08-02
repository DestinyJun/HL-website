import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../../../common/services/login.service';

@Component({
  selector: 'app-home-aboutus',
  templateUrl: './home-aboutus.component.html',
  styleUrls: ['./home-aboutus.component.css']
})
export class HomeAboutusComponent implements OnInit {
  public companyTro: string;
  @Input() h: number;
  constructor(
    private http: HttpClient,
    private logins: LoginService
  ) { }

  ngOnInit() {
    this.logins.getAbouts({start: 0, length: 1}).subscribe(
      (value) => {
          this.companyTro = value.data[0].companySummarize;
      }
    );
  }

}
