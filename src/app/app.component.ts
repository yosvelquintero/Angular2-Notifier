import { Component } from '@angular/core';

import { User } from './user/user.model';
import { Notification } from './notifier/notification.model';

import { NotifierService } from './notifier/notifier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName: string = 'Angular2 Notifier';
  users: User[] = [];
  activeUser: User;

  constructor(private notes: NotifierService) {}

  selectUser(user) {
    this.activeUser = user;
  }

  onUserCreated(event) {
    event.user.id = this.users.length + 1;
    this.users.push(event.user);
    this.selectUser(event.user);
    this.addNotification('success', `User ${event.user.name} created successfuly!`);
  }

  addNotification(type: string, message: string): void {
    let note = new Notification();
    note.type = type;
    note.message = message;

    this.notes.add(note);
  }
}
