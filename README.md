# unmaintained
I am not more maintain this project actively for different reasons. One is, that with Vite we have a nicer way to handle different aspects, other is time.
But I check and can accept pull requests.

### Visit my [Job Board for React Jobs](https://reactjsjob.com)


# react-webpack-6-tailwind-2

React 17 Boilerplate with React 17, Webpack 6, Tailwind 2, HMR, using babel, Jest unit testing, sass, with a hot dev server and an optimized production build

[Demo](https://dreamy-shirley-041c74.netlify.app/)

Maintained by [Altafino - Full-Stack Go/JS Development](https://altafino.com)

## Last Changes (the newest first):

- added full support for unit testing (with file mocks) using Jest
- added SVGR as a webpack loader to import your SVG directly as a React Component.
- added build-staging script. same as build but using .env.staging
- added dotenv-webpack to handle process.env.VARS
- added Prettier
- added react-refresh-webpack-plugin for HMR

## Installation

```
git clone https://github.com/altafino/react-webpack-5-tailwind-2.git
cd react-webpack-5-tailwind-2
yarn / npm i
```

To use it for your own project the easiest way is to use the green Template Button on top right of this repo on Github.

## Usage

### Development server

```bash
yarn start / npm start
```

You can view the development server at `localhost:3000`.
(change port in ./config/webpack.dev.js)

### Unit Test

```bash
 yarn test / npm test
```

### Production build

```bash
 yarn build / npm run build
```

## Features

- [React 17](https://reactjs.org/)
- [Webpack 6](https://webpack.js.org/)
- [Tailwind 2](https://tailwindcss.com)
- [Jest 27](http://jestjs.io/)
- [PostCss](https://postcss.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [Eslint](https://eslint.org/)
- [Husky](https://github.com/typicode/husky) ( tks [@rubinj30](https://github.com/rubinj30) )

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

### Jest

- [`jest`](https://jestjs.io/) - Delightful JavaScript Testing
- [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom#readme) - Custom jest matchers to test the state of the DOM
- [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/) - Simple and complete React DOM testing utilities
- [`@testing-library/user-event`](https://github.com/testing-library/user-event#readme) - Fire events the same way the user does

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
- [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Loader to process CSS with PostCSS
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Eslint

- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.
- [`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias) - a simple Node behavior import resolution plugin for eslint-plugin-import, supporting module alias.
- [`eslint-plugin-babel`](https://www.npmjs.com/package/eslint-plugin-babel) - an eslint rule plugin companion to babel-eslint.
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) - This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
- [`eslint-plugin-prettier`](https://www.npmjs.com/package/eslint-plugin-prettier) - Runs prettier as an eslint rule.
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) - React specific linting rules for ESLint.
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) - Enforces the Rules of React Hooks.

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`optimize-css-assets-webpack-plugin`](https://github.com/NMFR/optimize-css-assets-webpack-plugin) - Optimize and minimize CSS assets
- [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Optimize and minimize JavaScript
- [`react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin) - HMR using React Fast Refresh
- [`dotenv-webpack`](https://github.com/mrsteele/dotenv-webpack) - Supports dotenv and other environment variables
- [`@svgr/webpack`](https://github.com/mrsteele/dotenv-webpack) - SVGR can be used as a webpack loader, this way you can import your SVG directly as a React Component.
- [`babel-jest`](https://www.npmjs.com/package/babel-jest) - Babel jest plugin for transforimg `.js` and `.jsx` files
