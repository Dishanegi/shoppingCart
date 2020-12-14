import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriestableComponent } from './categoriestable.component';

describe('CategoriestableComponent', () => {
  let component: CategoriestableComponent;
  let fixture: ComponentFixture<CategoriestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriestableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
