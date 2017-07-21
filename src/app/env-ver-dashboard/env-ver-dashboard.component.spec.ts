import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvVerDashboardComponent } from './env-ver-dashboard.component';

describe('EnvVerDashboardComponent', () => {
  let component: EnvVerDashboardComponent;
  let fixture: ComponentFixture<EnvVerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvVerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvVerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
