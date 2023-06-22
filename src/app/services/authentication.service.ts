import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import {Router} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  public apiUrl = "http://localhost:3000";
  public currentUserInStorage = localStorage.getItem('currentUser') || "{}";
    public currentUserSubject = new BehaviorSubject<User>({});
    public currentUser: Observable<User>;
    public resetOptionsObservable = new BehaviorSubject(false);
    public resetPasswordObservable = new BehaviorSubject(false);
    public updateNotificationObservable = new BehaviorSubject(false);
    constructor(private http: HttpClient, public router: Router) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(this.currentUserInStorage));
      this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${this.apiUrl}/auth/login`,
          {email, password})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }
    register(user :User) {
      return this.http.post<any>(`${this.apiUrl}/auth/signup`,
      user)
          .pipe(map(resp => {
              // login successful if there's a jwt token in the response
              if (resp && resp.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(resp.token));
                  this.currentUserSubject.next(resp);
              }
              return resp;
          }));
  }
    logout() {
        return this.http.get<any>(`${this.apiUrl}/auth/logout`)
          .pipe(map(() => {
              // login successful if there's a jwt token in the response
              // remove user from local storage to log user out
              return;
          }));
    }


    getSession() {
      return this.http.get(`${this.apiUrl}/auth/me`)
            .pipe(map((data: any) => {
              const user = {
                token: this.currentUserSubject.value.token,
                user: data
              };
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;
            }, () => {
              this.router.navigate(['auth/login']);
            }));
    }
}
