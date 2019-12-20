import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CformdataComponent } from './cformdata.component';

describe('CformdataComponent', () => {
  let component: CformdataComponent;
  let fixture: ComponentFixture<CformdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CformdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CformdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
