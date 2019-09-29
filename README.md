# dotenvify

A wrapper around the browserify transform [envify](http://npmjs.com/envify) that supports loading variables from a .env file via [dotenv](http://npmjs.com/dotenv).

## Install

```sh
npm install --save-dev dotenvify
```

## Usage

Create a .env file in your root project directory. 

> You may want to hide this file from git by putting `.env` in your .gitignore file.

Next include

```shell
browserify index.js -t dotenvify > bundle.js
```

### Using with budo

```shell
npm i -D budo
```

```shell
budo index.js:bundle.js -- -t dotenvify
```

## License

[ISC](LICENSE.md)
