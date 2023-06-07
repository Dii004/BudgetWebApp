import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmanyComponent } from './sendmany.component';

describe('SendmanyComponent', () => {
  let component: SendmanyComponent;
  let fixture: ComponentFixture<SendmanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendmanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendmanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
