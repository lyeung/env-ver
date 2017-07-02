import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvVerItemTextComponent } from './env-ver-item-text.component';

describe('EnvVerItemTextComponent', () => {
  let component: EnvVerItemTextComponent;
  let fixture: ComponentFixture<EnvVerItemTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvVerItemTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvVerItemTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
