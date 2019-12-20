import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CformmedicoComponent } from './cformmedico.component';

describe('CformmedicoComponent', () => {
  let component: CformmedicoComponent;
  let fixture: ComponentFixture<CformmedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CformmedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CformmedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
