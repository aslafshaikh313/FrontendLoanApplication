import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSendingDocumentComponent } from './mail-sending-document.component';

describe('MailSendingDocumentComponent', () => {
  let component: MailSendingDocumentComponent;
  let fixture: ComponentFixture<MailSendingDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailSendingDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailSendingDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
