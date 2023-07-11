import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorPaisComponent } from 'src/app/pais/pages/por-pais/por-pais.component';

describe('PorPaisComponent', () => {
  let component: PorPaisComponent;
  let fixture: ComponentFixture<PorPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorPaisComponent ],
      imports:[ HttpClientModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
