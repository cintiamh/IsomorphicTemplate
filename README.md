# IsomorphicTemplate

A step by step new project set up for React Redux Isomorphic web app.

## Initialize

```
$ npm init -y
$ touch .gitignore
```

[.gitignore](.gitignore)

Basic file structure
```
$ mkdir src
$ mkdir src/actions
$ mkdir src/assets
$ mkdir src/components
$ mkdir src/config
$ mkdir src/reducers
$ mkdir src/styles
$ touch src/clientRender.js
$ touch src/server.js
$ touch src/serverRender.js
$ touch src/styles/styles.css
$ touch src/index.html
```

## Babel

```
$ npm i -S @babel/cli @babel/polyfill @babel/runtime
$ npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/node @babel/plugin-proposal-class-properties @babel/register
$ touch .babelrc
```

[.babelrc](.babelrc)

## Using webpack-dev-middleware

Express and webpack base:
```
$ npm i -S express
$ npm i -D webpack webpack-dev-middleware webpack-hot-middleware webpack-merge
```

Webpack loaders:
```
$ npm i -D style-loader css-loader file-loader html-loader "babel-loader@^8.0.0-beta"
```

Webpack plugins:
```
$ npm i -D html-webpack-plugin clean-webpack-plugin extract-text-webpack-plugin@next
```

Webpack config files:
```
$ touch webpack.common.config.js
$ touch webpack.dev.config.js
$ touch webpack.prod.config.js
```
