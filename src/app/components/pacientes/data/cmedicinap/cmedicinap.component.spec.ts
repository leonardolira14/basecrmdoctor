import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmedicinapComponent } from './cmedicinap.component';

describe('CmedicinapComponent', () => {
  let component: CmedicinapComponent;
  let fixture: ComponentFixture<CmedicinapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmedicinapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmedicinapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
