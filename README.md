

![Build Status](https://travis-ci.org/ybanda/Angular4App.svg?branch=master)

[![bitHound Dependencies](https://www.bithound.io/github/ybanda/Angular4App/badges/dependencies.svg)](https://www.bithound.io/github/ybanda/Angular4App/master/dependencies/npm)

# Welcome to Angular 4 With Type Script

## Hosted on Github Pages- [Demo](https://ybanda.github.io/Angular4App/)

## -[Heroku] (https://ybanda-angular4app.herokuapp.com/home)

## Install and Start application with Angular-CLI
npm i

npm start

## Installing Bootstrap
npm install bootstrap@4.0.0-alpha.5 --save

npm install --save @ng-bootstrap/ng-bootstrap

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

and including in the import array

npm install immutable --save ->To install immutable

## Installing JSON Server with Fake Rest API

npm install -g json-server

json-server https://jsonplaceholder.typicode.com/db

## Installing underscore
npm install -g typings --save

typings install --global --save dt~underscore

npm install @types/circular-json --save

npm install redux ng2-redux --save
npm install tassign --save -> type safe version of assign object
npm install immutable --save
##Removed Commands from package.json
"test": "ng test",
"e2e": "ng e2e"

ng build --prod
ng build --test
ng lint
ng lint --fix

 - Auto import and TSLint plugins for better development in VS.Code
 
 ## Deploy the code on GH Pages
 - npm i -g angular-cli-ghpages
 - ng build --prod  --base-href="https://ybanda.github.io/Angular4App/"
 - ngh --no-silent

## Installing Firebase
- npm i -g firebase-tools
- firebase login
- firebase init
   - Db
   - Functions
   - Hosting
- firebase deploy

## Heroku
- heroku --version
- heroku login
- heroku create ybanda-angular4app
- heroku open
- npm i express --save

   "start": "ng serve -o",
    "postinstall": "ng build --prod",

     "start": "node server.js",
    "postinstall": "ng build --prod",
- git add .
- git commit -m "heroku deploy"
- git push heroku master


### -Yashwanth Banda
