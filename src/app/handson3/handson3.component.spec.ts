import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Handson3Component } from './handson3.component';

describe('Handson3Component', () => {
  let component: Handson3Component;
  let fixture: ComponentFixture<Handson3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Handson3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Handson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
