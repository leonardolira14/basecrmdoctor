import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalisispComponent } from './canalisisp.component';

describe('CanalisispComponent', () => {
  let component: CanalisispComponent;
  let fixture: ComponentFixture<CanalisispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanalisispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanalisispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
