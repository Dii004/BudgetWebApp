import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationIdComponent } from './translation-id.component';

describe('TranslationIdComponent', () => {
  let component: TranslationIdComponent;
  let fixture: ComponentFixture<TranslationIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslationIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslationIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
