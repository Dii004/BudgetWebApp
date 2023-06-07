import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VystupnatabulkaComponent } from './vystupnatabulka.component';

describe('VystupnatabulkaComponent', () => {
  let component: VystupnatabulkaComponent;
  let fixture: ComponentFixture<VystupnatabulkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VystupnatabulkaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VystupnatabulkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
