import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumosregistryComponent } from './insumosregistry.component';

describe('InsumosregistryComponent', () => {
  let component: InsumosregistryComponent;
  let fixture: ComponentFixture<InsumosregistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsumosregistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumosregistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
