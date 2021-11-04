# Build email template with React
This project show how to build email templates using React then, generate the equivalent in HTML

## Prerequisites
* Node.js 12+
* Yarn or NPM

## Installation
Install the node modules
```shell
yarn install
```

## Launch the project
```shell
yarn start
```
Open the browser and navigate to: [http://localhost:3000/signup](http://localhost:3000/signup)
and start editing the template located in `src/templates/SignupWelcome`

## Generate the HTML from React
First build the Typescript project:
```shell
yarn tsc --project tsconfig.build.json
```
Run the code to generate the HTML
```shell
node dist/src/generateSignupEmail.js
```