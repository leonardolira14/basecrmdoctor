import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmedicosComponent } from './formmedicos.component';

describe('FormmedicosComponent', () => {
  let component: FormmedicosComponent;
  let fixture: ComponentFixture<FormmedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormmedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
