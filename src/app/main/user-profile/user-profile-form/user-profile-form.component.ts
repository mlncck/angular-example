import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfileData } from '../user-profile.component';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-test-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.createUserProfileForm();
  }

  onSubmit() {
    this.userProfileService.sendUserProfileData(this.form.value).subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }

  onReset() {
    this.form.reset();
  }

  private createUserProfileForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
    } as { [K in keyof UserProfileData]: any }, { updateOn: 'blur' });
  }

}
