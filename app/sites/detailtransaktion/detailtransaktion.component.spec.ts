import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtransaktionComponent } from './detailtransaktion.component';

describe('DetailtransaktionComponent', () => {
  let component: DetailtransaktionComponent;
  let fixture: ComponentFixture<DetailtransaktionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailtransaktionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailtransaktionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
