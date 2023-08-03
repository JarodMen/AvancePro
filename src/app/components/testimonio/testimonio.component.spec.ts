import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonioComponent } from './testimonio.component';

describe('TestimonioComponent', () => {
  let component: TestimonioComponent;
  let fixture: ComponentFixture<TestimonioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonioComponent]
    });
    fixture = TestBed.createComponent(TestimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
