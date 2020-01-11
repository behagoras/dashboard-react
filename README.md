# Real Estate React Dashboard

A React web application to manage real estate connected to an [express API](https://github.com/behagoras/express-real-estate-api) in which you can **C**reate, **R**ead, **U**pdate and **D**elete properties (**CRUD**).

![](https://firebasestorage.googleapis.com/v0/b/behagoras.appspot.com/o/github%2Ftrue-home.gif?alt=media&token=e2544df0-01cd-4601-a022-256be8381a9f)

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Technologies](#technologies)
- [Want to contribute?](#development) 

## Installation (make it smaller) 

## Quick Start

Please read [Get Started](https://dvc.org/doc/get-started) guide for a full version. Common workflow commands include:

| Step                     | Command                                                      |
| ------------------------ | ------------------------------------------------------------ |
| 1. Clone project         | `git clone https://github.com/behagoras/dashboard-react`     |
| 2. Install dependencies  | `yarn install`                                               |
| 3. Configure the apiHost | modify the host in [src/config/index.js](./src/config/index.js) |

For this project we need a backend, you can use the [express real estate api](https://github.com/behagoras/express-real-estate-api) for fullfilling the needs:

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `yarn build`

Builds the app for production to the `docs` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

## Full Responsive

The design adapts mobile and desktop.

![Responsive](https://firebasestorage.googleapis.com/v0/b/behagoras.appspot.com/o/github%2Fresponsive-dashboard.gif?alt=media&token=d5590032-8879-48c5-805e-050a384c61f2)



## Technologies

The application was created from scratch using:

- [React Js](https://reactjs.org/)
- [Styled Components](https://www.styled-components.com/)
- [React Final Form](https://github.com/final-form/react-final-form)
- [React Router](https://github.com/ReactTraining/react-router)
- [React Dropzone Component](https://github.com/felixrieseberg/React-Dropzone-Component)
- Javascript ES-2018
- Custom [Eslint](https://eslint.org/) based on [AirBnb](https://www.npmjs.com/package/eslint-config-airbnb)
- Custom [Webpack](https://webpack.js.org/)
- Custom [Babel](https://babeljs.io/)

Connected to an [express API](https://github.com/behagoras/express-real-estate-api) using:

- [Node JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Mongo Db Atlas](https://www.mongodb.com/cloud/atlas)
- [GCP storage](https://cloud.google.com/storage/)
- [Zeit Now](https://zeit.co/) for deployment

## Development

Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request

### Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/behagoras/dashboard-react/issues/new) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/behagoras/dashboard-react/issues/new). Please include sample queries and their corresponding results.

## API documentation

For complete documentation of the express API watch the project in [Express Real Estate API](https://github.com/behagoras/express-real-estate-api).

Made with ❤️ by[ David Behar](https://github.com/behagoras)

<div styl="max-width:50px">
    <div>
        <a href="https://sourcerer.io/behagoras"><img src="https://avatars2.githubusercontent.com/u/6518316?v=4" height="100px" width="100px" alt=""/></a>
    </div>
    <div>
        <a href="https://sourcerer.io/behagoras"><img width="100px" src="https://img.shields.io/badge/JavaScript-271%20commits-orange.svg" alt=""></a>
    </div>
</div>