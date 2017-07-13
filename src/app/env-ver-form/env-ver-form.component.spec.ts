import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvVerFormComponent } from './env-ver-form.component';

describe('EnvVerFormComponent', () => {
  let component: EnvVerFormComponent;
  let fixture: ComponentFixture<EnvVerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvVerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvVerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
