import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
declare let BMap;

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.css']
})
export class HomeContactComponent implements OnInit {
  public companyInFormation: any;
  constructor(
    public logins: LoginService
  ) { }

  ngOnInit() {
    this.contactMap();
    this.logins.getAbouts({start: 0, length: 1}).subscribe(
      (value) => {
        this.companyInFormation = value.data[0];
      }
    );
  }

  public contactMap () {
    const map = new BMap.Map('contactMap');
    map.centerAndZoom(new BMap.Point(106.65686, 26.681732), 14);
    const points = new BMap.Point(106.65686, 26.681732)
    const marker = new BMap.Marker(points);
    map.addOverlay(marker);
    marker.addEventListener('click', function () {
      let name = `<div><p style="color: rgb(252,67,46)">贵阳红鸟技术服务有限公司</p><p>地址：贵州省贵阳市白云区云城尚品19栋</p><p>电话：13984822555</p></div>`;
      const windows = new BMap.InfoWindow(name);
      this.openInfoWindow(windows);
    });

  }
}
