import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvVerItemLightComponent } from './env-ver-item-light.component';

describe('EnvVerItemLightComponent', () => {
  let component: EnvVerItemLightComponent;
  let fixture: ComponentFixture<EnvVerItemLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvVerItemLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvVerItemLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
