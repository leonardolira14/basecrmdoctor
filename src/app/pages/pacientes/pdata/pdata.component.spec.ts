import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdataComponent } from './pdata.component';

describe('PdataComponent', () => {
  let component: PdataComponent;
  let fixture: ComponentFixture<PdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
