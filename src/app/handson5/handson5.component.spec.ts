import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Handson5Component } from './handson5.component';

describe('Handson5Component', () => {
  let component: Handson5Component;
  let fixture: ComponentFixture<Handson5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Handson5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Handson5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
