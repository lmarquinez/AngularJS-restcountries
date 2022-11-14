import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesViewComponent } from './countries-view.component';

describe('CountriesViewComponent', () => {
  let component: CountriesViewComponent;
  let fixture: ComponentFixture<CountriesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
