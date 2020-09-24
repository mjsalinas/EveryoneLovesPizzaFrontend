import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosRegistriesComponent } from './empleados-registries.component';

describe('EmpleadosRegistriesComponent', () => {
  let component: EmpleadosRegistriesComponent;
  let fixture: ComponentFixture<EmpleadosRegistriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosRegistriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosRegistriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
