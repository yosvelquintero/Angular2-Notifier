import { Component } from '@angular/core';

import { Notification } from '../notifier/notification.model';

import { NotifierService } from '../notifier/notifier.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent {
  private notes: Notification[] = [];

  constructor(private notifications: NotifierService) {
    this.notes = new Array < Notification > ();

    notifications.noteAdded.subscribe(note => {
      // Should display max 5
      if (this.notes.length === 5) {
        return;
      }

      this.notes.push(note);
      // "info" should be closed automatically after 90 seconds
      let duration: number = (note.type === 'info') ? 90000 : 5000;
      setTimeout(() => this.hide.bind(this)(note), duration);
    });
  }

  private hide(note) {
    let index = this.notes.indexOf(note);

    if (index >= 0) {
      this.notes.splice(index, 1);
    }
  }
}


