# React Boilerplate
[![Build Status](https://travis-ci.org/yonatanhakatan/react-boilerplate.svg?branch=master)](https://travis-ci.org/yonatanhakatan/react-boilerplate) [![Coverage Status](https://coveralls.io/repos/yonatanhakatan/react-boilerplate/badge.svg?branch=master&service=github)](https://coveralls.io/github/yonatanhakatan/react-boilerplate?branch=master)  

An ever-evolving boilerplate for React SPA's using Redux.

## Storybook

To start storybook, run the following:

`./node_modules/.bin/start-storybook -p 9000 -s ./public`

## Generating Components
This boilerplate follows a pattern where each component is contained within it's own folder with the following structure:
```
folder/
folder/dumbComponent.js
folder/smartComponent.js
folder/component.spec.js
folder/component.scss
folder/storybook/component.js
```

As this can be a bit of a pain to do manually, there is a great tool called [redux-cli](https://github.com/SpencerCDixon/redux-cli) which you should install  globally by running:

`npm i redux-cli -g`

Then you can easily generate a new component structure using:

`redux g boilerplate NameOfComponent`
