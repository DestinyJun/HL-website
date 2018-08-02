import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public h: number;
  public divhei = 0;
  public wheelState = true;
  public timer: any;
  constructor() { }

  ngOnInit() {
    this.h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    window.addEventListener('resize', (e) => {
      this.h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    });
    window.addEventListener('wheel', (e) => {
      if (this.wheelState) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.wheelState = false;
        this.timer = setTimeout(() => {
          this.wheelState = true;
        }, 1000);
        if (e.deltaY > 0) {
          if (!(this.divhei === -(this.h * 2))) {
            this.divhei = this.divhei + (-this.h);
          }
        } else if (e.deltaY < 0) {
          if (!(this.divhei === 0)) {
            this.divhei = this.divhei + this.h;
          }
        }
      }
    });
  }
}
