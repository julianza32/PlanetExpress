import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterplanetComponent } from './interplanet.component';

describe('InterplanetComponent', () => {
  let component: InterplanetComponent;
  let fixture: ComponentFixture<InterplanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterplanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterplanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
