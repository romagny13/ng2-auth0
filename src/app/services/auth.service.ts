import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { config, options } from '../auth.config';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  lock = new Auth0Lock(config.clientID, config.domain, options);

  constructor() {
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.getProfile(authResult.idToken);
    });
  }

  getProfile(idToken) {
    this.lock.getProfile(idToken, function (error: any, profile: any) {
      if (error) { throw new Error(error); }
      localStorage.setItem('profile', JSON.stringify(profile));
    });
  }

  login() {
    // show the widget
    this.lock.show();
  }

  authenticated() {
    // Check if there's a jwt token in local storage
    return tokenNotExpired();
  }

  logout() {
    localStorage.removeItem('id_token');
  }
}
