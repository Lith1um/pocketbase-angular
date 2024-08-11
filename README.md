# Angular Pocketbase

This project provides a starter template for an angular app powered by pocket base

## Getting started

### Running pocketbase

You can start the application by running `./pocketbase serve` in the pocketbase directory.

- [`http://127.0.0.1:8090`](http://127.0.0.1:8090/) - if `pb_public` directory exists, serves the static content from it (html, css, images, etc.)
- [`http://127.0.0.1:8090/_/`](http://127.0.0.1:8090/_/) - Admin dashboard UI
- [`http://127.0.0.1:8090/api/`](http://127.0.0.1:8090/api/) - REST API

You could find all available commands and their options by running `./pocketbase --help` or `./pocketbase [command] --help`.

### Running the angular app

Navigate to the `ui` directory and run `npm start` to spin up the angular app.
