# GithubListingRepository

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

# Steps to Use the Application

1) On the landing page you will see a search box where the user can enter the username of the github profiles.
2) After searching for the username you can see the profile details of the user as well as their repositories on github.
3) Maximum of 8 repositories are shown on each page which can be traversed using the server side pagination.

# API Reference used
https://docs.github.com/en/rest/reference

## Development server
Install the dependencies using npm install command.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

1)Githun service file :  The test case checks whether a get request is being made for fetching the user profile data and is being executed without any error.

2)Github App Component : This test case verifies whether the fetched user profile data is being assigned back to the variable in the component, and also checks whether the loader is hidden after fetching of the data is successful.
  

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
