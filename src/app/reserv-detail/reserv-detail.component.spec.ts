import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservDetailComponent } from './reserv-detail.component';

describe('ReservDetailComponent', () => {
  let component: ReservDetailComponent;
  let fixture: ComponentFixture<ReservDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
