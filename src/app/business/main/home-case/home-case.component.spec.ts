import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCaseComponent } from './home-case.component';

describe('HomeCaseComponent', () => {
  let component: HomeCaseComponent;
  let fixture: ComponentFixture<HomeCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
