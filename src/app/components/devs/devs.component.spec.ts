import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsComponent } from './devs.component';

describe('DevsComponent', () => {
  let component: DevsComponent;
  let fixture: ComponentFixture<DevsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevsComponent]
    });
    fixture = TestBed.createComponent(DevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
