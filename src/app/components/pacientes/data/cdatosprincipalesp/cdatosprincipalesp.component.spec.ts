import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdatosprincipalespComponent } from './cdatosprincipalesp.component';

describe('CdatosprincipalespComponent', () => {
  let component: CdatosprincipalespComponent;
  let fixture: ComponentFixture<CdatosprincipalespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdatosprincipalespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdatosprincipalespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
