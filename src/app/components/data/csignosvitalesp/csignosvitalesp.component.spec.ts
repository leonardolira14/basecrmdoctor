import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsignosvitalespComponent } from './csignosvitalesp.component';

describe('CsignosvitalespComponent', () => {
  let component: CsignosvitalespComponent;
  let fixture: ComponentFixture<CsignosvitalespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsignosvitalespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsignosvitalespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
