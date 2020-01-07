import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpdrGuardComponent } from './gpdr-guard.component';

describe('GpdrGuardComponent', () => {
  let component: GpdrGuardComponent;
  let fixture: ComponentFixture<GpdrGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpdrGuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpdrGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
