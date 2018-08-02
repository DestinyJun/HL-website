import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../common/services/login.service';
declare let BMap;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public picture: string;
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
    this.logins.getBanner({start: 0, length: 5}).subscribe(
      value => {
        let a: any;
        a = value.data.filter(
          (element) => {
            if (element.pageName === '联系我们') {
              return true;
            } else {
              return false;
            }
          }
        );
        console.log(a[0].pageUrl);
        this.picture = a[0].pageUrl;
      });
  }

  public contactMap () {
    const map = new BMap.Map('contactMap');
    map.centerAndZoom(new BMap.Point(106.65686, 26.681732), 14);
    const points = new BMap.Point(106.65686, 26.681732)
    const marker = new BMap.Marker(points);
    map.addOverlay(marker);
    marker.addEventListener('click', function () {
      const name = `<div><p style="color: rgb(252,67,46)">贵阳红鸟技术服务有限公司</p><p>地址：贵州省贵阳市白云区云城尚品19栋</p><p>电话：13984822555</p></div>`;
      const windows = new BMap.InfoWindow(name);
      this.openInfoWindow(windows);
    });

  }

}
