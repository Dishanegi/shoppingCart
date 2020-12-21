import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocartComponent } from './democart.component';

describe('DemocartComponent', () => {
  let component: DemocartComponent;
  let fixture: ComponentFixture<DemocartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemocartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
