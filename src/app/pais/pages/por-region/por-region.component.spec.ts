import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorRegionComponent } from 'src/app/pais/pages/por-region/por-region.component';

describe('PorRegionComponent', () => {
  let component: PorRegionComponent;
  let fixture: ComponentFixture<PorRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorRegionComponent ],
      imports:[ HttpClientModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
