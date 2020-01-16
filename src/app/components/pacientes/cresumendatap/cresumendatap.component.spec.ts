import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CresumendatapComponent } from './cresumendatap.component';

describe('CresumendatapComponent', () => {
  let component: CresumendatapComponent;
  let fixture: ComponentFixture<CresumendatapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CresumendatapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CresumendatapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
