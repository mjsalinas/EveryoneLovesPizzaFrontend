import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterNavitationSuperadminComponent } from './master-navitation-superadmin.component';

describe('MasterNavitationSuperadminComponent', () => {
  let component: MasterNavitationSuperadminComponent;
  let fixture: ComponentFixture<MasterNavitationSuperadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterNavitationSuperadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterNavitationSuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
