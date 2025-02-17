# AngularFirebaseRealtimeUserCount

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Environment Setup

To use this project, you need to set up your Firebase environment variables. Follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or select an existing project.
3. Navigate to the project settings by clicking on the gear icon next to "Project Overview".
4. In the "General" tab, scroll down to the "Your apps" section and click on the web icon to create a new web app.
5. Register your app and Firebase will provide you with your Firebase configuration.

Create a file named `environment.secret.ts` in the `src/environments` directory of your project and add the following environment variables with your Firebase configuration details:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    databaseURL: "your-database-url",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
  },
};
```

Make sure to replace the placeholder values with your actual Firebase configuration details.

## Using Firebase Realtime Database

This project demonstrates how to use Firebase Realtime Database to track live user count on the platform. The Firebase Realtime Database allows you to store and sync data between your users in real-time.

For more information on Firebase Realtime Database, visit the [Firebase Realtime Database Documentation](https://firebase.google.com/docs/database).

## Running the Application

After setting up your environment variables, you can run the application using the following command:

```bash
ng serve
```

Open your browser and navigate to `http://localhost:4200/` to see the live user count in action.
