# Contractor Proposal Generator
a proposal generator for construction industry contractors


[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?)](https://github.com/ziggysauce/ziggy-react-app/pulls)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/ziggysauce/ziggy-react-app/blob/master/LICENSE)
[![node](https://img.shields.io/badge/node-v10.1.0-brightgreen.svg)](https://nodejs.org/en/)
[![npm](https://img.shields.io/badge/npm-v5.6.0-blue.svg)](https://www.npmjs.com/)



## Table of Contents
* [Quick Start](#quick-start)
* [Requirements](#requirements)
* [Instructions](#instructions)
* [Contributing](#contributing)

## Quick Start
* Clone or download this repository  
  ```
  git clone https://github.com/odelavia/contractor-proposal-generator.git
  ```  
* In your terminal, navigate to the root directory  
  ```
  cd contractor-proposal-generator
  ```  
* Install dependencies  
  ```
  npm install
  ```

### Development
* Run script for development build:  
  ```
  npm run build:dev
  ```  
* In browser, application is served at `http://localhost:8080`

### Production
* Add a `.env` file to the root of your directory
  * Add the following code to your `.env` file:
    ```
    PORT=5000
    SESSION_SECRET=<your_session_secret_here>
    ```
  * Add your own `SESSION_SECRET` value
* Run script to start up app:  
  ```
  npm start
  ```  
* `prestart` script will run and create `dist` directory with production build


## Requirements
* [Node](https://nodejs.org/en/) (v9+)
* [NPM](https://www.npmjs.com/) (v5+)


### Directory Structure
```
contractor-proposal-generator/             # application root directory
├── client/                                # frontend directory
│    ├── dist/                             # production code directory ignored by .gitignore file
│    ├── src/                              # development code directory
│    │    ├── __tests__                    # jest testing directory
│    │    │    ├── __snapshots__/          # jest snapshots directory (created after running tests)
│    │    │    └── app.test.js             # initial test file
│    │    ├── components/                  # react components directory
│    │    │    └── App.js                  # initial App.js file
│    │    ├── styles/                      # sass styles directory
│    │    │    ├── components/             # sass components directory
│    │    │    │    └── _app.scss          # initial styling for app component
│    │    │    ├── setup/                  # sass setup directory
│    │    │    │    ├── _base.scss         # base styling
│    │    │    │    └── _variables.scss    # sass variables
│    │    │    └── main.scss               # root sass file (import other files here)
│    │    ├── index.html                   # template HTML file
│    │    └── index.js                     # application entry point
├── server/                                # backend directory
│    ├── middleware/                       # server middleware directory
│    │    ├── cors.js                      # CORS middleware
│    │    ├── index.js                     # middleware configuration file
│    │    └── session.js                   # express-session middleware
│    └── server.js                         # express server entry point
├── .babelrc                               # babel configuration file
├── .eslintrc.js                           # eslint configuration file
├── webpack.common.js                      # base webpack configuration
├── webpack.dev.js                         # development build webpack configuration
└── webpack.prod.js                        # production build webpack configuration
```

### Command Scripts
| npm <script>   |                     Function/Description                              |
| -------------- | --------------------------------------------------------------------- |
| prestart       | Run webpack production build script before express server             |
| start          | Starts app on express server at `localhost:5000`                      |
| test           | Runs all tests files (`.test.js` type)                                |
| test:verbose   | Displays individuals test results                                     |
| test:coverage  | Collects test coverage information and reports output                 |
| build:dev      | Runs webpack developement build (HMR enabled) at `localhost:8080`     |
| build:prod     | Runs webpack production build (`dist` directory created)              |


## Instructions
* Frontend

* Backend
  * Add a `.env` file to the root of your directory
    * Add the following code to your `.env` file:
      ```
      PORT=5000
      SESSION_SECRET=<your_session_secret_here>
      ```
    * Add your own `SESSION_SECRET` value
    * Edit .env variables however you see fit
    * Removing a variable from here may require changes throughout the app where `process.env` is called
* Testing
  * Run `npm test` to start all jest testing
  * Run `npm run test:verbose` to see jest testing details
  * Run `npm run test:coverage` to create coverage directory
    * Run `open coverage/lcov-report/index.html` to see jest testing coverage

## Contributing
This contractor-proposal-generator app is open source. Any feedback, issues, contributions, and requests are appreciated and encouraged.  

For more information:  
[Contributing Instructions](https://github.com/odelavia/contractor-proposal-generator/blob/master/CONTRIBUTING.md)  
[License](https://github.com/odelavia/contractor-proposal-generator/blob/master/LICENSE)  

If you found this repository helpful, please give me a follow and star this repository. Thanks for all the support!
