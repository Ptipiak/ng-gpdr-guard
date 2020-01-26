import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdprGuardComponent } from './gdpr-guard.component';

describe('GdprGuardComponent', () => {
  let component: GdprGuardComponent;
  let fixture: ComponentFixture<GdprGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdprGuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdprGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
