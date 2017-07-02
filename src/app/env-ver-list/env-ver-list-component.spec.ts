import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvVerListComponentComponent } from './env-ver-list-component.component';

describe('EnvVerListComponentComponent', () => {
  let component: EnvVerListComponentComponent;
  let fixture: ComponentFixture<EnvVerListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvVerListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvVerListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
