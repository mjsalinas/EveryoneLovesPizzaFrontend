import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesregistriesComponent } from './categoriesregistries.component';

describe('CategoriesregistriesComponent', () => {
  let component: CategoriesregistriesComponent;
  let fixture: ComponentFixture<CategoriesregistriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesregistriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesregistriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
