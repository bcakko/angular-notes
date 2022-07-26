import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  localLoggedIn = this.getData('login');
  private loggedIn$ = new BehaviorSubject<boolean>(this.localLoggedIn);
  isLoggedIn = this.loggedIn$.asObservable();

  private error$ = new BehaviorSubject<Error | false>(false);
  error = this.error$.asObservable();

  username = 'baris';
  password = '12345';

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn$.value);
      }, 100);
    });
    return promise;
  }

  login(username: string, password: string) {
    if (username === this.username && password === this.password) {
      this.loggedIn$.next(true);
      this.error$.next(false);
      this.setData('login', this.loggedIn$.value);
    } else {
      this.error$.next({
        name: 'invalid login',
        message: 'Username or password is invalid.',
      });
    }
  }

  logout() {
    this.loggedIn$.next(false);
    this.setData('login', this.loggedIn$.value);
  }

  setData(key: string, value: boolean) {
    const localValue = JSON.stringify(value);
    localStorage.setItem(key, localValue);
  }

  getData(key: string): boolean {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : false;
  }
}
