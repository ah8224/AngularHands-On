import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Handson1Component } from './handson1.component';

describe('Handson1Component', () => {
  let component: Handson1Component;
  let fixture: ComponentFixture<Handson1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Handson1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Handson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
