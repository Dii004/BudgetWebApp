import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayedsendmanyComponent } from './displayedsendmany.component';

describe('DisplayedsendmanyComponent', () => {
  let component: DisplayedsendmanyComponent;
  let fixture: ComponentFixture<DisplayedsendmanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayedsendmanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayedsendmanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
