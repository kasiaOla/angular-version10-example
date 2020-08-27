# Sample project implemented in Angular version 10

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

If you want to using the code from the GitHub repository, execute the following commands in the directory where you’d like to create the project directory:

## 1. Get repository

- git clone https://github.com/kasiaOla/angular10-example.git


## 2. Installation of the environment

- cd angular10-example
- npm install or npm i


## 3. Compilation

- npm run build (npm scripts, without SSR)
- npm run build:ssr (npm scripts, with SSR) or run the command in the console `ng build --prod && ng run angular10-example:server:production`


## 4. Run

Run production `ng run angular10-example:serve-ssr` in the terminal or dev:ssr in npm script. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Development Server-side rendering (SSR)

Run `serve:ssr` for a dev server.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Running unit tests

Components include unit tests. Run `ng test` (Jasmine) to execute the unit tests via [Karma](https://karma-runner.github.io).


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## MongoDB database

In the cmd console go to the directory: `Program Files\MongoDB\Server\3.6\bin` in this directory run the command:

`mongod.exe --logpath D:\mongo\logs --logappend --bind_ip 127.0.0.1 --auth --port 27017 --dbpath D:\mongo\data\db`

Run the second cmd console and go to the directory: `Program Files\MongoDB\Server\3.6\bin` in this directory run the command:

`mongo --port 27017 -u admin -p password --authenticationDatabase admin`

In the database, you need to create a user with permissions. Please find below a description of the steps to add such a user:

1. `use mean`

2. `db.createUser({ user: "admin", pwd: "password", roles: [{ role: "root", db: "admin" }]});`

![location](https://user-images.githubusercontent.com/67895860/89988482-e5a56300-dc7f-11ea-8d22-8bb673b7d9ba.png)

Example data from the database are in files:

1. database-mongoDB\example-data\announcement.json
2. database-mongoDB\example-data\users.json






