import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisInputComponent } from 'src/app/pais/components/pais-input/pais-input.component';

describe('PaisInputComponent', () => {
  let component: PaisInputComponent;
  let fixture: ComponentFixture<PaisInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
