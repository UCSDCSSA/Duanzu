# UCSD CSSA Duanzu - React Front-end

## Setup

Make sure you are in this folder (`source/react/`), and run the following
command to install the dependencies before you can run anything.

```sh
$ npm install
```

Then you are good to go! Type

```sh
$ npm start
```

to start the WebPack server and you can now go to your browser and type in

```
http://localhost:3000/
```

to access the pages.

## File Structure

```
react/

---Dependencies---
|- node_modules/

---Working Files---
|- public/
   |- js/
   |- css/
   |- index.html
|- components/
|- index.js

---Config Files Beyond This Point---
|- package.json
|- package-lock.json
|- webpack.config.js
|- .babelrc
```

The Dependencies Folder will not be there before you have used `npm install` to
install all the dependencies. Please do not touch any file in the directory.

What we are working on are the Working Files. Before getting into anything,
please do remind yourself for most of the cases we don't need to change any file
in `public/` folder as well as the `index.js` file. All we want to do is to
add files and modify them in `components/`. If you have any need to modify
`public/` or `index.js` please tell the administrator. All the files in
`components/` will be in `.js` format and will be React Renderable JSX files.

You also should not touch any file among the config files please notice.
