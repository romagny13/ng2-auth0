interface AuthConfiguration {
    clientID: string;
    domain: string;
}

export const config: AuthConfiguration = {
    clientID: '...',
    domain: '...'
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
