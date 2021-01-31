import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, throwError } from 'rxjs';
import { UserProfileData } from './user-profile.component';
import { concatMap, tap, catchError } from 'rxjs/operators';
import { SubmittedDataFormat } from '../submitted-data/submitted-data.component';



@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  userProfileDataSubmitted$ = new BehaviorSubject(false);
  userProfileData$ = new BehaviorSubject<SubmittedDataFormat[]>([]);

  constructor(private http: HttpClient) { }

  resetForm() {
    this.userProfileDataSubmitted$.next(false);
    this.userProfileData$.next([]);
    console.log()
  }

  sendUserProfileData(body: UserProfileData) {
    return this.http.post(`${POST_BASE_URL}/posts`, body).pipe(
      tap(() => {
        this.userProfileData$.next([
          { label: 'Name', value: body.name },
          { label: 'Email', value: body.email },
          { label: 'Phone Number', value: body.phoneNumber }
        ]);
        this.userProfileDataSubmitted$.next(true);
      })
    );
  }

  getAllData() {
    console.log('req1');
    return this.getData('1').pipe(
      tap((res) => console.log('req1', res)),
      concatMap((result) => this.getData('2')), // we can change '2' to 'a/2' for example to simulate error
      tap((result) => console.log('req2', result)),
      concatMap((result1) => this.getData('3')),
      tap((result1) => console.log('req3', result1)),
    );
  }

  getAllAtOnce() {
    return forkJoin(
      this.getData('1'),
      this.getData('2'),
      this.getData('3')
    );
  }

  private getData(id: string) {
    return this.http.get(`${GET_BASE_URL}/people/${id}`).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }
}

const GET_BASE_URL = 'https://www.swapi.tech/api'
const POST_BASE_URL = 'https://jsonplaceholder.typicode.com'