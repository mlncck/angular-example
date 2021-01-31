import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SubmittedDataComponent } from './submitted-data/submitted-data.component';
import { UserProfileFormComponent } from './user-profile/user-profile-form/user-profile-form.component';
import { SubmittedDataModule } from './submitted-data/submitted-data.module';
import { UserProfileModule } from './user-profile/user-profile.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SubmittedDataModule,
    UserProfileModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
