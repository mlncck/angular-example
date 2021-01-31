import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfileService } from '../user-profile/user-profile.service';

export interface SubmittedDataFormat {
  label: string;
  value: string;
}

@Component({
  selector: 'app-test-submitted-data',
  templateUrl: './submitted-data.component.html',
  styleUrls: ['./submitted-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmittedDataComponent {

  userProfileData$: Observable<SubmittedDataFormat[]>;
  userProfileDataSubmitted$: Observable<boolean>;

  constructor(private userProfileService: UserProfileService) {
    this.userProfileData$ = this.userProfileService.userProfileData$;
    this.userProfileDataSubmitted$ = this.userProfileService.userProfileDataSubmitted$;
  }
}
