[![CircleCI](https://circleci.com/gh/alexdisdier/leboncoin-client.svg?style=svg)](https://circleci.com/gh/alexdisdier/leboncoin-client)
[![codecov](https://codecov.io/gh/alexdisdier/leboncoin-client/branch/master/graph/badge.svg)](https://codecov.io/gh/alexdisdier/leboncoin-client)

# Desktop

![leboncoin.fr copycat by alex disdier](/screenshot.gif?raw=true "Gif leboncoin.fr copycat by alex disdier")

# Mobile

 <p align="center" >
   <a href="https://leboncoin-alex-client.herokuapp.com/">
    <img alt="leboncoin.fr copycat by alex disdier" src="https://res.cloudinary.com/dvrkxmxkw/image/upload/v1552171586/github-screenshot-gif/leboncoin-mobile.gif" width="252" height="401" />
 </a>

# Synopsis

This is a clone of Le boncoin website built with React. All rights reserved to Leboncoin.fr

I also built the backend. If you would like to take a look, click on [click here](https://github.com/alexdisdier/leboncoin-api)

## Usage example

See demo - https://leboncoin-alex-client.herokuapp.com/

## ✅ Functionalities

- Display the offers
- Display a single offer.
- Images Carousel.
- Search filters
- Pagination
- Cookies set for user identity and search filters
- Create a user account
- Login to your user account.
- Publish an offer (using cloudinary to store images)
- Access to your user profile displaying all the offer you've posted.
- The user can delete his offers.
- Loading component implemented.
- Mobile Responsive

## Directory Structure

```bash

leboncoin-client
├── public
├── src
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   └── img
│   ├── components
│   │   ├── Card
│   │   ├── Error
│   │   ├── Filters
│   │   ├── Header
│   │   ├── Loading
│   │   └── Pagination
│   ├── containers
│   │   ├── Home
│   │   ├── Login
│   │   ├── Offer
│   │   ├── Profile
│   │   ├── Publish
│   │   └──SignUp
│   ├── Validation
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── serviceWorker.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

```

## Running the project

Clone this repository :

```bash
git clone https://github.com/alexdisdier/leboncoin-client.git

cd leboncoin-client
```

Start the server:

```bash
npm start
```

Build the project

```bash
npm run build
```

## Built With

- html
- css
- [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript)
- [React.js](https://reactjs.org/docs/hello-world.html)
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)

## Known bugs to fix

- bug occurs when filters are on. the pagination adjusts but all the results are on a single page.
- Also when you remove the search filters cookies, the homepage does not automatically refresh.

## Acknowledgments

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel).
- [Faker](https://www.npmjs.com/package/faker).
- Deploy React to github pages [codeburst](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d)
