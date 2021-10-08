# React + TailwindCss + JIT + Vite

In this project I am trying to create a sample admin panel project with the help of React, Tailwind, JIT and Vite.

## [React](https://reactjs.org/)

The primary JS framework in which this project is built

## [Tailwind CSS](https://tailwindcss.com/)

The primary CSS formatter framework used. It is similar to Bootstrap but doesn't provide pre-built components like
button etc. It's more like shorthand notation of standard CSS.

## [JIT](https://tailwindcss.com/docs/just-in-time-mode)

_A faster, more powerful, on-demand engine for Tailwind CSS v2.1+._

## [Vite](https://vitejs.dev/)

The build & deploy tool that is faster and more efficient than CRA(create-react-app). It pre-incorporates tree shakedown
tool to reduce the production-build binary size be it in terms of JS code or CSS code.

## [Docker](https://www.docker.com/)

A tool to encapsulate the whole thing into a repeatable, predictable, shareable and deployment efficient bundle.

## Scripts available

### `npm run build`

Standard build command to generated production ready build with all files minified.

### `npm run clean`

Removes the `out` folder.

### `npm run dev`

Starts a local server on `3000` port in development mode for development and testing.

### `npm run docker:build`

Cleans, build the code and then generates a docker image with production ready code.

### `npm run docker:clean-up:c`

Stops the docker container and removes the container.

### `npm run docker:clean-up:i`

Delete the docker image from local repository.

### `npm run docker:serve`

`docker:build` + starts the docker container. Default port of application is `8080`. Check `config.port`
in `package.json`.

### `npm run fix`

Run the `npm audit` with force fix the issues that audit reports.

### `npm run serve`

Run a production ready code in local server on port `5000` for local testing and verification.

### `npm run upgrade`

Run the update process to update all the development and production dependencies defined in `package.json` file.
