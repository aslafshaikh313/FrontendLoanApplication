import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionStatusComponent } from './sanction-status.component';

describe('SanctionStatusComponent', () => {
  let component: SanctionStatusComponent;
  let fixture: ComponentFixture<SanctionStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctionStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanctionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
