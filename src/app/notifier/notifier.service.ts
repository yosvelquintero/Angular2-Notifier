import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Notification } from '../notifier/notification.model';

@Injectable()
export class NotifierService {
  private notifications = new Subject<Notification>();

  noteAdded = this.notifications.asObservable();

  add(notification: Notification) {
    this.notifications.next(notification);
  }
}

