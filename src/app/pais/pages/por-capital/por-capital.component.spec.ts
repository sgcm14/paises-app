import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorCapitalComponent } from 'src/app/pais/pages/por-capital/por-capital.component';

describe('PorCapitalComponent', () => {
  let component: PorCapitalComponent;
  let fixture: ComponentFixture<PorCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorCapitalComponent ],
      imports:[ HttpClientModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
