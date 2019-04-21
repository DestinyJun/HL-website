import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public h: number;
  public w: number;
  public divhei = 0;
  public wheelState = true;
  public timer: any;
  public carouselShow = false;
  public aboutShow = false;
  public newsShow = false;
  public caseShow = false;

  // 触摸点
  public touchEvent: number;
  public touchType: string;
  constructor() { }

  ngOnInit() {
    // 手指触摸时触发
    document.querySelector('.main').addEventListener('touchstart', (e) => {
      this.touchEvent = e.targetTouches[0].clientY;
    });
    // 手指滑动时触发
    document.querySelector('.main').addEventListener('touchmove', (e) => {
      this.touchScrollEvent(e);
    });
    // 手指离开时触发
    document.querySelector('.main').addEventListener('touchend', (e) => {
      this.touchType = e.type;
    });
    // this.h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (this.w < 993) {
      this.h = window.innerHeight - 50 || document.documentElement.clientHeight - 50 || document.body.clientHeight - 50;
    } else {
      this.h = window.innerHeight - 80 || document.documentElement.clientHeight - 80 || document.body.clientHeight - 80;
    }
    window.addEventListener('resize', (e) => {
      this.w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (this.w < 993) {
        this.h = window.innerHeight - 50 || document.documentElement.clientHeight - 50 || document.body.clientHeight - 50;
      } else {
        this.h = window.innerHeight - 80 || document.documentElement.clientHeight - 80 || document.body.clientHeight - 80;
      }
    });
    if (this.divhei === 0) {
      this.carouselShow = true;
    }
    window.addEventListener('wheel', (e) => {
     this.scrollEvent(e);
    });
  }
  public scrollEvent(e): void {
    if (this.wheelState) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.wheelState = false;
      this.timer = setTimeout(() => {
        this.wheelState = true;
      }, 1000);
      if (e.deltaY > 0) {
        if (!(this.divhei === -(this.h * 3))) {
          this.divhei = this.divhei + (-this.h);
        }
      } else if (e.deltaY < 0) {
        if (!(this.divhei === 0)) {
          this.divhei = this.divhei + this.h;
        }
      }
    }

   /* if (this.divhei === 0) {
      this.carouselShow = true;
    } else if (this.divhei === -this.h) {
      this.aboutShow = true;
      console.log(this.aboutShow);
    } else if (this.divhei === this.h * 2) {
      this.newsShow = true;
    } else if (this.divhei === this.h * 3) {
      this.caseShow = true;
    }*/
  }
  public touchScrollEvent(e): void {
    if (this.wheelState && this.touchType === 'touchend') {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.wheelState = false;
      this.timer = setTimeout(() => {
        this.wheelState = true;
      }, 1000);
      if ((e.targetTouches[0].clientY - this.touchEvent) < 0) {
        if (!(this.divhei === -(this.h * 3))) {
          this.divhei = this.divhei + (-this.h);
        }
      } else if ((e.targetTouches[0].clientY - this.touchEvent) > 0) {
        if (!(this.divhei === 0)) {
          this.divhei = this.divhei + this.h;
        }
      }
    }
    if (this.divhei === 0) {
      this.carouselShow = true;
    } else if (this.divhei === -this.h) {
      this.aboutShow = true;
    } else if (this.divhei === this.h * 2) {
      this.newsShow = true;
    } else if (this.divhei === this.h * 3) {
      this.caseShow = true;
    }
  }
}
