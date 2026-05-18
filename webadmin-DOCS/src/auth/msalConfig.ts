import type { Configuration } from '@azure/msal-browser'

export const msalConfig: Configuration = {
  auth: {
    clientId: '8849746e-50c2-4f4d-a590-95aa28c751f1',
    authority: 'https://login.microsoftonline.com/b96cc57b-d146-48f5-a381-7cf474c23a9e',
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: 'localStorage',
  },
}

export const loginRequest = {
  scopes: ['User.Read'],
  prompt: 'select_account',
}
