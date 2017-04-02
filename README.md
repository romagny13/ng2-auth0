# Auth0 with Angular 2

## Usage

Replace clientID and domain in auth.config.ts

```
npm i
ng serve
```
go http://localhost:4200

## Memento

- Create an Auth0 <a href="https://auth0.com/">account</a>
- On the dashboard, create "new client"... then choose "single page application" and "Angular 2"
- In the settings, set an Allowed callback URL (example: http://localhost:4200)

Use Quickstart and samples code

```
npm i angular2-jwt auth0-lock -S
```

Add in index html page

```
<script src="http://cdn.auth0.com/js/lock/10.7/lock.min.js"></script>
```

Create config 'auth.config.ts' + options (login dialog box)
```js
interface AuthConfiguration {
    clientID: string;
    domain: string;
}

export const config: AuthConfiguration = {
    clientID: '...',
    domain: '...eu.auth0.com'
};

// options : https://auth0.com/docs/libraries/lock/v10/customization
export const options = {
    allowedConnections: ['facebook', 'google-oauth2', 'Username-Password-Authentication'],
    allowForgotPassword: true,
    allowSignUp: true,
    theme: {
        logo: '/assets/angular.png',
        primaryColor: '#C30E2E'
    },
    languageDictionary: {
        title: 'Mon app'
    },
    popupOptions: { width: 300, height: 400, left: 200, top: 300 },
    language: 'fr'
};

```

"AppModule"

Add AUTH_PROVIDERS to AppModule 'providers' array
```js
import { AUTH_PROVIDERS } from 'angular2-jwt';
```

Issue with Angular Cli 1.0.0 <a href="https://github.com/auth0/angular2-jwt/issues/258">https://github.com/auth0/angular2-jwt/issues/258</a>

```js
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Create AuthService, components, guard, etc.
