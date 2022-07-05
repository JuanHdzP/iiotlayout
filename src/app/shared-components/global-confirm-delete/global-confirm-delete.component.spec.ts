import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalConfirmDeleteComponent } from './global-confirm-delete.component';

describe('GlobalConfirmDeleteComponent', () => {
  let component: GlobalConfirmDeleteComponent;
  let fixture: ComponentFixture<GlobalConfirmDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalConfirmDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalConfirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
