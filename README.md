# TODO
  - inject webdriver code to report click events
  - make console listen and report event stream
  - parse script and execute commands step by step
  - display results of commands.. somewhere?

# Running

- In a terminal somewhere, start protractor debug with `protractor --elementExplorer --debuggerServerPort 4242`
- Start the server with `ts-node server/server.ts`
- Serve the app by running `npm start`

# ProtractorConsole

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Development server
Run `ng serve` to start the dev server and `npm start` to start the console server. The console
server just proxies to the dev server in order to support hot reloading and fast iteration.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
