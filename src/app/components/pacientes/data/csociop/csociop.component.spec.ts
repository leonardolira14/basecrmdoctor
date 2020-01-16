import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsociopComponent } from './csociop.component';

describe('CsociopComponent', () => {
  let component: CsociopComponent;
  let fixture: ComponentFixture<CsociopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsociopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsociopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
