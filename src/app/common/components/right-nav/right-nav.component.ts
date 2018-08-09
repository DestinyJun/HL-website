import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.css']
})
export class RightNavComponent implements OnInit {
  // 表单
  public titleFilter: FormControl = new FormControl();
  public keyWord: string;
  // 保存关键字
  @Output() public question =  new EventEmitter<string>();
  @Output() public eventBtn =  new EventEmitter<any>();
  constructor() {}

  ngOnInit() {
    this.titleFilter.valueChanges
      .debounceTime(10)
      .subscribe(
        (value) => {
          this.question.emit(value);
          this.keyWord = value;
        }
      );
  }
  public onClick(): void {
    this.eventBtn.emit(this.keyWord);
  }

}
