import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbeforeOrderComponent } from './viewbefore-order.component';

describe('ViewbeforeOrderComponent', () => {
  let component: ViewbeforeOrderComponent;
  let fixture: ComponentFixture<ViewbeforeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbeforeOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbeforeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
