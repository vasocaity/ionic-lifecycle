import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrogePage } from './stroge.page';

describe('StrogePage', () => {
  let component: StrogePage;
  let fixture: ComponentFixture<StrogePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrogePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrogePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
