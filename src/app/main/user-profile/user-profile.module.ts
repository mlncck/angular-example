import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';
import { SubmittedDataModule } from '../submitted-data/submitted-data.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const COMPONENTS = [
  UserProfileComponent,
  UserProfileFormComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SubmittedDataModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class UserProfileModule { }
