import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantecendetesmedicospComponent } from './cantecendetesmedicosp.component';

describe('CantecendetesmedicospComponent', () => {
  let component: CantecendetesmedicospComponent;
  let fixture: ComponentFixture<CantecendetesmedicospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantecendetesmedicospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantecendetesmedicospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
