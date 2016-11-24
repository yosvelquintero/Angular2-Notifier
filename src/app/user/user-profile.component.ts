import { Component, Input } from '@angular/core';

import { User } from '../user/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {
  @Input() user: User;
}
