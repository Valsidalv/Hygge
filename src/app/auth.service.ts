import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
  private isloggedIn: boolean;
  private userName: string;
  private password: string;

  constructor() {
    this.isloggedIn = false;
  }

  login(username: string, password: string) {
    this.isloggedIn = true;
    this.userName = username;
    this.password = password;
    return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  isAdminUser(): boolean {
    if (this.userName == 'Admin' && this.password == '12345') {
      return true;
    }
    return false;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }
}
