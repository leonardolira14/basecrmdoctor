import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CexpedientepComponent } from './cexpedientep.component';

describe('CexpedientepComponent', () => {
  let component: CexpedientepComponent;
  let fixture: ComponentFixture<CexpedientepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CexpedientepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CexpedientepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
