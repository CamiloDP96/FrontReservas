import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouthUsComponent } from './abouth-us.component';

describe('AbouthUsComponent', () => {
  let component: AbouthUsComponent;
  let fixture: ComponentFixture<AbouthUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbouthUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbouthUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
