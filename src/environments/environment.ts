// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBKbaksIFTqiiMoKeIu54na0HtxZ8fKpuw",
    authDomain: "angular-gallery-ab4ee.firebaseapp.com",
    databaseURL: "https://angular-gallery-ab4ee.firebaseio.com",
    projectId: "angular-gallery-ab4ee",
    storageBucket: "angular-gallery-ab4ee.appspot.com",
    messagingSenderId: "892485739871"
  }
};
