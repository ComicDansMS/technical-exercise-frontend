import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterYearComponent } from './filter-year.component';

describe('FilterYearComponent', () => {
  let component: FilterYearComponent;
  let fixture: ComponentFixture<FilterYearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterYearComponent]
    });
    fixture = TestBed.createComponent(FilterYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
