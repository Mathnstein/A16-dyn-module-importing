import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynLibComponent } from './dyn-lib.component';

describe('DynLibComponent', () => {
  let component: DynLibComponent;
  let fixture: ComponentFixture<DynLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynLibComponent]
    });
    fixture = TestBed.createComponent(DynLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
