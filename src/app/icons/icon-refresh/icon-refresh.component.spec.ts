import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRefreshComponent } from './icon-refresh.component';

describe('IconRefreshComponent', () => {
  let component: IconRefreshComponent;
  let fixture: ComponentFixture<IconRefreshComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconRefreshComponent]
    });
    fixture = TestBed.createComponent(IconRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
