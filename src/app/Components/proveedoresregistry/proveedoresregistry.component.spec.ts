import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresregistryComponent } from './proveedoresregistry.component';

describe('ProveedoresregistryComponent', () => {
  let component: ProveedoresregistryComponent;
  let fixture: ComponentFixture<ProveedoresregistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedoresregistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedoresregistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
