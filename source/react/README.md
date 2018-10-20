# React Starter Web Repo

This repository contains all the (biased) setup files for a react web application:

- Folder structures
- Webpack & webpack dev server: You can develop fluently
- Flow typing: You get types in javascript
- `scss` & `css` loader: `import 'style.scss'` in your javascript files
- Home directory when import: You can write `import '~/components'` when import
- React Router: Front-end routing plugin
- An express server, so that you can build and then run the application on your server

## Setup

To setup this repo, first clone this to your local machine. Make sure you have node (10.0+) and npm (6.2+) installed,
and then

```
$ npm install
```

At the same time, make sure that you fill in all the `FILL-IN-` placeholders in
`package.json`. Also do install `flow-bin` in your computer in order to run the flow
type check.

## Development

To develop this repo on your local machine, run

```
$ npm run dev
```

This will open up port `9000` on your machine. If you want to change the port, go to `src/config/webpack.dev.config.js`.
So now go to `localhost:9000/` on your browser, you can then see the page showing up.

## Build & Deploy

We will generate an express server serving a single-page application. To do that, run

```
$ npm run build
```

This command will create several compiled files under `src/build/`. Make sure `index.html`, `main.css`, `main.js` are
all there, then run

```
$ npm start
```

to start the express server. This will open up port `3000` on your machine. Go to `localhost:3000` to view the webpage
if you are running the production server on your own machine. If you are deploying this on a server, make sure you
redirect the requests to the port `3000`. Or if you want to pick another port, go to `src/config/express.config.js` and
change the `port` property there.

## Clean

```
$ npm run clean
```
