import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectCibilComponent } from './reject-cibil.component';

describe('RejectCibilComponent', () => {
  let component: RejectCibilComponent;
  let fixture: ComponentFixture<RejectCibilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectCibilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectCibilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
