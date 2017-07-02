import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvVerItemComponentComponent } from './env-ver-item-component.component';

describe('EnvVerItemComponentComponent', () => {
  let component: EnvVerItemComponentComponent;
  let fixture: ComponentFixture<EnvVerItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvVerItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvVerItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
