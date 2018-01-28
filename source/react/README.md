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
http://localhost:8080/
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

## File Organizing, Naming Instructions and Formatting

### JSX Naming Instructions

For every file under `./components/`, please name the file using 'Capitalize
the first character for every word'. For example `AboutUs.js`, `Main.js` and so
on. In every `.JSX` file, you should have an `export`. Please make sure that
*the item you export* has exactly the same name as the file name. For example,
in `Main.js` you must have the last line `export default Main;`.

### Router Naming Instructions

In `./components/Main.js` we define a bunch of routes for the application. Here
for every route that you create, we must keep the route has naming style 'all
lower-case words concatenated by `_`'. For example `/about_us`,
`/profile/change_password` and so on. Please note that you should not hesitate
to add extra path to group the routes.

### Formatting

To make things easy and consistent, in all JSX files in `./components`, we use
the *default setting* of *Atom Beautifier* to format your code. If you are
using Atom, please go to [here](https://atom.io/packages/atom-beautify)
to install this plugin to Atom. If not, then *at least* follow the following
rules:

- All white-space using space (` `). No Tab (`\t`).
- All indentation are 4 spaces.
- All the JavaScript part of the code must not exceed 80 chars per line.
- Add semi-colon (`;`) to everywhere you need to.
