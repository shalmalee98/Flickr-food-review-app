import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodIndividualComponent } from './food-individual.component';

describe('FoodIndividualComponent', () => {
  let component: FoodIndividualComponent;
  let fixture: ComponentFixture<FoodIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
