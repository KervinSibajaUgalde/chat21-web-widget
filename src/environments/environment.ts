// The file contents for the current environment will overwrite these during build2.
// The build2 system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build2 --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// tslint:disable-next-line:max-line-length
// import { firebaseConfig } from '../environments/firebase-config'; // please comment on this line when changing the values ​​of firebase {}


export const environment = {
  production: false,
  version: require('../../package.json').version,
  remoteConfig: false,
  remoteConfigUrl: '/widget-config.json',
  remoteTranslationsUrl: 'http://localhost:3000/',
  loadRemoteTranslations: true,
  firebase: {
    apiKey: 'AIzaSyCCXlqBMquWntJLBseu6qNTM-mTrMfYFW8',
    authDomain: 'tiledesk-facture-dev.firebaseapp.com',
    databaseURL: 'https://tiledesk-facture-dev-default-rtdb.firebaseio.com/',
    projectId: 'tiledesk-facture-dev',
    storageBucket: 'tiledesk-facture-dev.appspot.com',
    messagingSenderId: '82084183603'
  },
  apiUrl: 'http://localhost:3000/',
  tenant: 'tilechat',
  defaultLang : 'es',
  shemaVersion : '1'
};
