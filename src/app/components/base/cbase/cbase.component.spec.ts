import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbaseComponent } from './cbase.component';

describe('CbaseComponent', () => {
  let component: CbaseComponent;
  let fixture: ComponentFixture<CbaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
