import { Injectable } from '@angular/core';
import { LocalStorage } from '../shared/utils/local-storage.utils';
import { Subject } from 'rxjs';
import { UserProfileService } from '../main/user-profile/user-profile.service';

export interface LoginData {
  email: string;
  password: string;
}

const LOCAL_STORAGE_KEY = 'test-app-is-authenticated';

@Injectable()
export class AuthService {

  // not a good idea to save state of a user in Localstorage
  @LocalStorage(LOCAL_STORAGE_KEY, false) private isAuthenticated: boolean;

  authChanged$ = new Subject();

  constructor(private userProfileService: UserProfileService) { }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  login(credentials: LoginData) {
    if (credentials.password && credentials.email) {
      this.isAuthenticated = true;
      this.authChanged$.next();
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.userProfileService.resetForm();
    this.authChanged$.next();
  }
}
