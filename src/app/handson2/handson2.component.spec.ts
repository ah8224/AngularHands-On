import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Handson2Component } from './handson2.component';

describe('Handson2Component', () => {
  let component: Handson2Component;
  let fixture: ComponentFixture<Handson2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Handson2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Handson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
