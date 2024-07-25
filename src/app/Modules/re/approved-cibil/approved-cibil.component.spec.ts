import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedCibilComponent } from './approved-cibil.component';

describe('ApprovedCibilComponent', () => {
  let component: ApprovedCibilComponent;
  let fixture: ComponentFixture<ApprovedCibilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedCibilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedCibilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
