import { IConfig } from './iconfig';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr: false
};

export const CONFIG: IConfig = {
    'firebaseConfig': {
        apiKey: 'AIzaSyBvlBZqFoCGf_LEn2984zWucGj4cFq2D5A',
        authDomain: 'mainapp-9c872.firebaseapp.com',
        databaseURL: 'https://mainapp-9c872.firebaseio.com',
        projectId: 'mainapp-9c872',
        storageBucket: 'mainapp-9c872.appspot.com',
        messagingSenderId: '365674294653'
    }
};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
