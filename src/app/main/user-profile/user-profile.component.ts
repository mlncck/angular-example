import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserProfileService } from './user-profile.service';

export interface UserProfileData {
  name: string;
  email: string;
  phoneNumber: string;
}

export type LoadingState = 'loading' | 'loaded' | 'error';

@Component({
  selector: 'app-test-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent {

  constructor(private userProfileService: UserProfileService) { }

  onReset() {
    this.userProfileService.resetForm();
  }
}
