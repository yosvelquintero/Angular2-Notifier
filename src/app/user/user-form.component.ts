import { Component, Output, EventEmitter } from '@angular/core';

import { User } from '../user/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() userCreated = new EventEmitter();
  newUser: User = new User();
  active: boolean = true;

  onSubmit() {
    // show the event that the user was created
    this.userCreated.emit({ user: this.newUser });

    this.newUser = new User();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
