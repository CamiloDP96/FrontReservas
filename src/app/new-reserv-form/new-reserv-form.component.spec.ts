import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReservFormComponent } from './new-reserv-form.component';

describe('NewReservFormComponent', () => {
  let component: NewReservFormComponent;
  let fixture: ComponentFixture<NewReservFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReservFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReservFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
