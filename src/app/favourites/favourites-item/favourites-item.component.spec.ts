import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesItemComponent } from './favourites-item.component';

describe('FavouritesItemComponent', () => {
  let component: FavouritesItemComponent;
  let fixture: ComponentFixture<FavouritesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouritesItemComponent]
    });
    fixture = TestBed.createComponent(FavouritesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
