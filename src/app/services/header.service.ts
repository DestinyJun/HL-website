import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class HeaderService {
  public name: Subject<string> = new Subject<string>();
  constructor() {

  }
}
