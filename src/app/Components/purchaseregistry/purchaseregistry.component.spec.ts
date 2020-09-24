import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseregistryComponent } from './purchaseregistry.component';

describe('PurchaseregistryComponent', () => {
  let component: PurchaseregistryComponent;
  let fixture: ComponentFixture<PurchaseregistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseregistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseregistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
