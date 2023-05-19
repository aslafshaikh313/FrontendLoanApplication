import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadgerManagmentComponent } from './leadger-managment.component';

describe('LeadgerManagmentComponent', () => {
  let component: LeadgerManagmentComponent;
  let fixture: ComponentFixture<LeadgerManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadgerManagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadgerManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
