import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  public presentPage = 1;
  public sumPage: number;
  @Output() followPage = new EventEmitter<number>();
  @Input() totalPage: number;
  constructor() { }

  ngOnInit() {}
  ngOnChanges(): void {
    this.sumPage = this.totalPage;
  }

  public previousClick() {
    if (!(this.presentPage === 1)) {
      this.presentPage = this.presentPage - 1;
      this.followPage.emit(this.presentPage);
    } else {
      this.presentPage = 1;
      this.followPage.emit(this.presentPage);
    }
  }
  public nextClick() {
    if (this.presentPage !== this.sumPage) {
      this.presentPage = this.presentPage + 1;
      this.followPage.emit(this.presentPage);
    } else {
      this.presentPage = this.sumPage;
      this.followPage.emit(this.presentPage);
    }
  }
}
