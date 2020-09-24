import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesRegistriesComponent } from './clientes-registries.component';

describe('ClientesRegistriesComponent', () => {
  let component: ClientesRegistriesComponent;
  let fixture: ComponentFixture<ClientesRegistriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesRegistriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesRegistriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
