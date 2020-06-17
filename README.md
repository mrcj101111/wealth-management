# Wealth Management
A one-stop management application for all your investments.

## Features

- RESTful API using Nodejs and Express
- SQL database using Postgresql
- Authentication using Auth0
- GUI using React

## Requirements
- React 16.13.1 
- Express 4.17.1
- Node 12.14.1

## Installation
Clone this repository to your local machine and then `cd` into the folder where you've cloned the project.

    npm install

## Run 
Before you run your backend, make sure you have the latest migrations.
To run the latest migrations navigate into your `api` folder and type in the following comand:

    knex migrate:latest

To run your backend on a local server, navigate into the `api` and type in the following in your cli:

    node app.js

To run your frontend on a local server, navigate into the `airport-CRUD-app` folder and run the following command:

    ng serve


## build
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

    npm run build
