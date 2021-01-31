import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { unsubscribe } from '../shared/utils/angular.utils';

@Component({
  selector: 'app-test-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean;

  get showLogout() {
    return this.authService.getIsAuthenticated();
  }

  private authChangedSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.updateAuthState();
    this.authChangedSubscription = this.authService.authChanged$.subscribe({
      next: () => {
        this.updateAuthState();
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    unsubscribe(this.authChangedSubscription);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  private updateAuthState() {
    this.isLoggedIn = this.authService.getIsAuthenticated();
  }
}
