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
  public carouselShow = false;
  public aboutShow = false;
  public newsShow = false;
  public caseShow = false;
  constructor() { }

  ngOnInit() {
    this.h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    window.addEventListener('resize', (e) => {
      location.reload();
      this.h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    });
    if (this.divhei === 0) {
      this.carouselShow = true;
    }
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
          if (!(this.divhei === -(this.h * 3))) {
            this.divhei = this.divhei + (-this.h);
          }
        } else if (e.deltaY < 0) {
          if (!(this.divhei === 0)) {
            this.divhei = this.divhei + this.h;
          }
        }
      }
      console.log(this.h);

      if (this.divhei === 0) {
        this.carouselShow = true;
      } else if (this.divhei === -this.h) {
        this.aboutShow = true;
        console.log(this.aboutShow);
      } else if (this.divhei === this.h * 2) {
        this.newsShow = true;
      } else if (this.divhei === this.h * 3) {
        this.caseShow = true;
      }
    });

  }
}
