# Polymer3-SFS

Polymer 3 project - Start from scratch

## Installation

* Install Node.js

Go to [Node website](https://nodejs.org/en/)

* Install Yarn
  (npm should work as well)

Go to [Yarn website](https://yarnpkg.com/en/docs/install#mac-tab)

A very cool dependency management

## Usage

* Clone or Download the project

* Install dependencies

```
$ cd my-project
$ yarn install
```

a) for dev build

```
$ cd my-project
$ yarn run dev
```

b) for prod build

```
$ cd my-project
$ yarn run build
```

Install [http-server](https://github.com/indexzero/http-server)

A command-line http server

```
$ yarn global add http-server
```

then

```
$ cd my-project\dist
http-server
```

* Go to localhost

a) for dev build: [localhost:8000](http://localhost:8000/)

b) for prod build: [localhost:8080](http://localhost:8080/)

## Features

* include 3rd-party JS library
* [Webpack](https://webpack.js.org/)
* [Favicons Webpack Plugin](https://github.com/jantimon/favicons-webpack-plugin)
* [Director router](https://github.com/flatiron/director)
* NO unit/integration test has been developed

## Conclusion

This is a very complete example, I hope this will help you to understand better Polymer 3.
