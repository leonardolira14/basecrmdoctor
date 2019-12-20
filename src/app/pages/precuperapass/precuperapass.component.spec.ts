import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecuperapassComponent } from './precuperapass.component';

describe('PrecuperapassComponent', () => {
  let component: PrecuperapassComponent;
  let fixture: ComponentFixture<PrecuperapassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecuperapassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecuperapassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
