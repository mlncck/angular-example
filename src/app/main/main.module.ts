import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
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
