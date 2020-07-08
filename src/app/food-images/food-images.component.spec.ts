import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodImagesComponent } from './food-images.component';

describe('FoodImagesComponent', () => {
  let component: FoodImagesComponent;
  let fixture: ComponentFixture<FoodImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
