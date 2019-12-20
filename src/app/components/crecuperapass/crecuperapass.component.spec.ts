import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrecuperapassComponent } from './crecuperapass.component';

describe('CrecuperapassComponent', () => {
  let component: CrecuperapassComponent;
  let fixture: ComponentFixture<CrecuperapassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrecuperapassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrecuperapassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
