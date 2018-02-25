# UCSDCSSA 短租平台

## Developer

UCSD中国华人学生学者联合会 技术部 网站组

## Dependencies

- NodeJs: [https://nodejs.org](https://nodejs.org) Please go to the website and download the latest version and install.
- ReactJs: [https://reactjs.org](https://reactjs.org) You don't need to go to the website but follow the front-end ReactJs readme to setup your environment.
- Materialize-CSS:
    - Materialize-CSS-Base: [http://materializecss.com](http://materializecss.com) See the documentation.
    - React-Materialize: [https://react-materialize.github.io](https://react-materialize.github.io) Preferred in front-end development. See the documentation.
- ExpressJs: [https://expressjs.com](https://expressjs.com) For developing the backend. Please follow the back-end Express readme to setup your environment.
- MongoDB: [https://www.mongodb.com](https://www.mongodb.com) Please go to MongoDB.com to download the latest version of Mongo DB.

To assist your development, recommend have the following development tools:

- Chrome: [https://chrome.com](https://chrome.com) For front-end debugging
- Atom: [https://atom.io](https://atom.io) For text editing
    - Atom JSX Plugin: [https://github.com/subtlegradient/language-javascript-jsx](https://github.com/subtlegradient/language-javascript-jsx) For JSX Syntax Highlighting and beautify
- Postman: [https://getpostman.com](https://getpostman.com) For back end development
- Robo3T: [https://robomongo.org](https://robomongo.org) For Mongo DB Management

## Platforms

The system has roughly two parts:

- Front-end
- Back-end

We are separating the development between front-end and back-end

### Front-end

The front-end library is relying on ReactJs and WebPack. For the CSS we are
using Materialize-CSS. All the instructions to run the front-end webserver
is in `source/react/README.md`. Follow the instructions to run the front-end
server and view the website in your computer in `http://localhost:8080/`.

### Back-end

The back-end is backing by Express, directly using the basic to write the 
system. All the back-end documentations is in `documentation/API.md`.
