import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRemoveComponent } from './icon-remove.component';

describe('IconRemoveComponent', () => {
  let component: IconRemoveComponent;
  let fixture: ComponentFixture<IconRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconRemoveComponent]
    });
    fixture = TestBed.createComponent(IconRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
