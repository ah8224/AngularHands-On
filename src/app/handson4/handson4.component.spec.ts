import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Handson4Component } from './handson4.component';

describe('Handson4Component', () => {
  let component: Handson4Component;
  let fixture: ComponentFixture<Handson4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Handson4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Handson4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
