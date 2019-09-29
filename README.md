# dotenvify

A wrapper around the browserify transform [envify](http://npmjs.com/envify) that supports loading variables from a .env file via [dotenv](http://npmjs.com/dotenv).

## Install

```sh
npm install --save-dev @sethvincent/dotenvify
```

## Usage

Create a .env file in your root project directory. 

> You may want to hide this file from git by putting `.env` in your .gitignore file.

Enter some environment variables in the .env file.

Use the environment variables in your frontend javascript.

Next run:

```shell
browserify index.js -t @sethvincent/dotenvify > bundle.js
```

> Replace index.js and bundle.js with the filepaths used in your project.

The usage of the environment variables in the js will be replaced with the values in the .env file.

### Include dotenv options

```shell
browserify index.js -t [ @sethvincent/dotenvify --path some/other/path/.env ] > bundle.js
```

See more [dotenv options](http://npmjs.com/dotenv)

### Using with budo

```shell
npm i -D budo
```

```shell
budo index.js:bundle.js -- -t @sethvincent/dotenvify
```

## License

[ISC](LICENSE.md)
