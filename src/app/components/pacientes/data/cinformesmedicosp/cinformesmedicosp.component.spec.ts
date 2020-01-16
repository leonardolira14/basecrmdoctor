import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinformesmedicospComponent } from './cinformesmedicosp.component';

describe('CinformesmedicospComponent', () => {
  let component: CinformesmedicospComponent;
  let fixture: ComponentFixture<CinformesmedicospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinformesmedicospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinformesmedicospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
