import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainwatchComponent } from './mainwatch.component';

describe('MainwatchComponent', () => {
  let component: MainwatchComponent;
  let fixture: ComponentFixture<MainwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainwatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
