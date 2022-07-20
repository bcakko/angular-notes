import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  private loggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn$.asObservable();

  private error$ = new BehaviorSubject<Error | false>(false);
  error = this.error$.asObservable();

  username = 'baris';
  password = '12345';

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn$.value);
      }, 300);
    });
    return promise;
  }

  login(username: string, password: string) {
    if (username === this.username && password === this.password) {
      this.loggedIn$.next(true);
      this.error$.next(false);
    } else {
      this.error$.next({
        name: 'invalid login',
        message: 'Username or password is invalid.',
      });
    }
  }

  logout() {
    this.loggedIn$.next(false);
  }
}
