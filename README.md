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

### Generating types from your pocketbase schema

From the `ui` directory, run `npm run typegen`. This will produce a types file (pocketbase-types.ts) for all your PocketBase collections to use in your angular app.

Under the hood this uses [pocketbase-typegen](https://github.com/patmood/pocketbase-typegen), check the docs for more info if you want to configure it further.

### UI Library (Shoelace)

To streamline development, the angular app is pre-bundled with [@shoelace/style](https://shoelace.style/).

## Troubleshooting

pocketbase-angular was developed on an arm based mac, so the executable is compiled for arm64 processors. If you wish to use this to develop an app on another platform, you can download the relevant binary from the [pocketbase website](https://pocketbase.io/docs/). Simply replace the binary in the root of this project and away you go! 