import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherChipComponent } from './weather-chip.component';

describe('WeatherChipComponent', () => {
  let component: WeatherChipComponent;
  let fixture: ComponentFixture<WeatherChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
