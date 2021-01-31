import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserProfileModule } from '../main/user-profile/user-profile.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserProfileModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }
