import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFilmComponent } from './icon-film.component';

describe('IconFilmComponent', () => {
  let component: IconFilmComponent;
  let fixture: ComponentFixture<IconFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconFilmComponent]
    });
    fixture = TestBed.createComponent(IconFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
