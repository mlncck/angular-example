import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SubmittedDataModule } from '../submitted-data/submitted-data.module';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';

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
