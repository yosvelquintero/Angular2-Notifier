/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NotifierComponent } from './notifier.component';

import { NotifierService } from './notifier.service';

import { Notification } from './notification.model';

describe('NotifierComponent', () => {
  // Application wide providers
  const APP_PROVIDERS = [
    NotifierService
  ];
  let note: Notification;
  let notifications: NotifierService = new NotifierService()

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotifierComponent
      ],
      providers: [APP_PROVIDERS]
    });

    // Create note
    note = new Notification();
    note.type = 'info';
    note.message = 'This is a test string message!';

    // Adde note to notifications
    notifications.add(note);
  });

  it('should create the notifier', async(() => {
    let fixture = TestBed.createComponent(NotifierComponent);
    let notifier = fixture.debugElement.componentInstance;
    expect(notifier).toBeTruthy();
  }));

  it('should be creted a note', async(() => {
    expect(JSON.stringify(note)).toEqual(JSON.stringify({
      type: 'info',
      message: 'This is a test string message!'
    }));
  }));
});
