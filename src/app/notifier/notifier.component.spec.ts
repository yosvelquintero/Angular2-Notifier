import { TestBed, async } from '@angular/core/testing';
import { NotifierComponent } from './notifier.component';

import { NotifierService } from './notifier.service';

import { Notification } from './notification.model';

// Application wide providers
const APP_PROVIDERS = [
  NotifierService
];

describe('NotifierComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotifierComponent
      ],
      providers: [APP_PROVIDERS]
    });
  });

  it('should create the notifier', async(() => {
    let fixture = TestBed.createComponent(NotifierComponent);
    let notifier = fixture.debugElement.componentInstance;
    expect(notifier).toBeTruthy();
  }));

  describe('external usage', () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 90001;

    it('should be creted a limit of notes 5', async(() => {
      let notifications: NotifierService = new NotifierService();
      let notifier: NotifierComponent = new NotifierComponent(notifications);
      let arr: Array < number > = [0, 1, 2, 3, 4, 5, 6];
      let counter = 1;

      // Subscribe
      notifications.noteAdded.subscribe((data) => {
          expect(data.type).toBe('success');
          expect(data.message).toBe(`This is message ${counter}.`);
          counter++;
        },
        (error) => {
          fail(error);
        });

      arr.forEach(i => {
        // Create and add note to notifications
        let note: Notification = new Notification();
        note.type = 'success';
        note.message = `This is message ${i + 1}.`;
        notifications.add(note);
      });

      expect(notifier.getNotesLength()).toBe(5);
    }));
  });

  describe('NotificationService', () => {
    it('should crete and add a note', async(() => {
      let notifications: NotifierService = new NotifierService();
      // Create note
      let note: Notification = new Notification();
      note.type = 'success';
      note.message = 'This is a test string message!';

      // Subscribe
      notifications.noteAdded.subscribe((data) => {
          expect(data.type).toBe('success');
          expect(data.message).toBe('This is a test string message!');
        },
        (error) => {
          fail(error);
        });

      // Add note
      notifications.add(note);
    }));
  });
});
