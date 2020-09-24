import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvetarioregistriesComponent } from './invetarioregistries.component';

describe('InvetarioregistriesComponent', () => {
  let component: InvetarioregistriesComponent;
  let fixture: ComponentFixture<InvetarioregistriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvetarioregistriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvetarioregistriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
