import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {HeaderService} from '../../services/header.service';
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
    public logins: LoginService, private header: HeaderService
  ) {

  }

  ngOnInit() {
    this.header.name.next('联系我们');
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
        this.picture = a[0].pageUrl;
      });
  }

  public contactMap () {
    const map = new BMap.Map('contactMap');
    map.centerAndZoom(new BMap.Point(106.65686, 26.681732), 14);  // 设置地图中心点
    const points = new BMap.Point(106.65686, 26.681732); /*标记点初始化*/
    const marker = new BMap.Marker(points); /*标记点*/
    map.addOverlay(marker);
    marker.addEventListener('click', function () {
      const name = `<div><p style="color: rgb(252,67,46)">贵阳红鸟技术服务有限公司</p><p>地址：贵州省贵阳市白云区云城尚品19栋</p><p>电话：13984822555</p></div>`;/*设定显示标签的内容*/
      const windows = new BMap.InfoWindow(name); /*标签初始化*/
      this.openInfoWindow(windows);
    });

  }

}
