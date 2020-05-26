import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntergalacticComponent } from './intergalactic.component';

describe('IntergalacticComponent', () => {
  let component: IntergalacticComponent;
  let fixture: ComponentFixture<IntergalacticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntergalacticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntergalacticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
