import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinicioComponent } from './pinicio.component';

describe('PinicioComponent', () => {
  let component: PinicioComponent;
  let fixture: ComponentFixture<PinicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
