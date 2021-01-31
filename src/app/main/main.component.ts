import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { unsubscribe } from '../shared/utils/angular.utils';
import { LoadingState } from './user-profile/user-profile.component';
import { UserProfileService } from './user-profile/user-profile.service';

@Component({
  selector: 'app-test-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit, OnDestroy {

  state$ = new BehaviorSubject<LoadingState>('loaded');

  private subscriptions: Subscription[] = [];

  constructor(private userProfileService: UserProfileService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.state$.next('loading');
    this.subscriptions.push(this.userProfileService.getAllData().subscribe({
      next: (request) => {
        this.subscriptions.push(this.userProfileService.getAllAtOnce().subscribe({
          next: (response) => {
            console.log('allatonce', response);
          },
        }));
        this.state$.next('loaded');
      },
      error: () => {
        this.state$.next('error');
      }
    }));

  }

  ngOnDestroy() {
    unsubscribe(this.subscriptions);
  }

}
