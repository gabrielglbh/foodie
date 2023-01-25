import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailsNotFoundComponent } from './recipe-details-not-found.component';

describe('RecipeDetailsNotFoundComponent', () => {
  let component: RecipeDetailsNotFoundComponent;
  let fixture: ComponentFixture<RecipeDetailsNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailsNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDetailsNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
