# React Cookie Notification Component

Simple React component for showing cookie notification.

Bundled with [Webpack 2](https://webpack.js.org/)

It includes linting with [ESLint](http://eslint.org/) and testing with [Jest](http://facebook.github.io/jest/), [Enzyme](http://airbnb.io/enzyme/).

## Usage
Im using yarn but just replace with npm if you want.
1. Install module `yarn add react-cookie-notification` or `npm install react-cookie-notification`
2. include in project `import cookie_notification from 'react-cookie-notification'`

## Development
3. Run tests: `yarn run test` or `npm run test-watch`. You need to write tests in `__tests__` folder or as `.test.js`.
4. Run linting: `yarn run lint`. Fix bugs: `npm run lint-fix`. You can adjust your `.eslintrc` config file.
5. Bundle with `yarn run build`
6. Or production build with `yarn run production`        
 
## Also check out

- [React npm component component boilerplate](https://github.com/lindgr3n/react-npm-component-boilerplate)

## Good to know
As of now you need to install react-test-renderer to skip warnings from jest: 

`yarn add -D react-test-renderer` 

**Source:** https://github.com/airbnb/enzyme/issues/875

Will get some error like this:

    `console.error node_modules/fbjs/lib/warning.js:36
        Warning: ReactTestUtils has been moved to react-dom/test-utils. Update references to remove this warning.
        console.error node_modules/fbjs/lib/warning.js:36
        Warning: Shallow renderer has been moved to react-test-renderer/shallow. Update references to remove this warning.`
       