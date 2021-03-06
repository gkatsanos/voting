[![Build Status](https://travis-ci.org/gkatsanos/voting.svg?branch=master)](https://travis-ci.org/gkatsanos/voting)
[![Coverage Status](https://coveralls.io/repos/github/gkatsanos/voting/badge.svg?branch=master)](https://coveralls.io/github/gkatsanos/voting?branch=master)
# Voting SPA

## Live demo

http://vote.gplus.gr

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run tests
npm run test

# see coverage report
npm run test:coverage

```

## Tools and Libraries used
- VueJS
- Vuetify (MaterialUI framework)
- Vuex for State Management
- Axios for HTTP
- No Lodash 
- AirBnB ESLint ruleset
- Moment (vue-moment) for date formatting
- Jest

## Features

- Client-side validation: users can only vote once in each question (not persisted in the API/Cache)
- Mark in which question user voted in Questions List page
- Choice votes are shown in percentage-based bars in Question Details page


## Notes & Known Issues

- Axios does not return all available Response headers, so we have no bullet-proof way of knowning if we have reached the max number of available pages. As a nasty workaround, we use the error catch handler to hide the button and reset our Store "nextPage" property to 1.

- State lives solely in memory, and is not persisted in localStorage, but is kept between routes. (aka, a page refresh will remove "voted" flags and other client-side validations).
As the API doesn't provide authorization and authentication ways in order to limit voting per account, persisting Storage wouldn't have any practical benefit for validation. Performance would be better for the purpose of this assignment I considered it out of scope.
