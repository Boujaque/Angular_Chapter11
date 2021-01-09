import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter11Component } from './chapter11.component';

describe('Chapter11Component', () => {
  let component: Chapter11Component;
  let fixture: ComponentFixture<Chapter11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
