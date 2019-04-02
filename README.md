# JS401 - Lab-11 Authentication
## Author: Cory Henderson
## Collaborators: Greg Dukes, Alex White, Aaron Ferris, Jon Gentry
This lab contains a server with authentication routes that are currently not working.  Below, the bugs which were fixed to get the server running are reported.

## Links and Resources
- [Github Repo](https://github.com/401-advanced-javascript-1/lab-11-authentication/tree/submission)
- [Travis](https://www.travis-ci.com/401-advanced-javascript-1/lab-11-authentication)
- [Heroku](https://lychee-surprise-35345.herokuapp.com/)

## Documentation
- [Jsdocs](https://github.com/401-advanced-javascript-1/lab-11-authentication/tree/submission/docs)

## Found Bugs:
- app.js
  - app.use(authRouter)
  - app.use(bookRouter)

- router.js
  - should be POST for /signin route

- users-model.js
  - Require bcrypt and jwt
  - line 33 include .then(valid => valid ? this : null)

- middleware.js:
  - line 9 change to authString
  - line 24 arg should be authString
  - line 28 should be object (not array)
  - line 36 should include req.user and req.token

- books.js
  - require('auth/middleware.js)
  - then use the auth middleware on the /books and /books/:id routes

# Modules
- index.js
- app.js
- middleware.js
- router.js
- users-model.js
- books.js
- 404.js, error.js
- middleware/router.test.js
- supergoose.js

# Setup
- .env requirements
  - MONGODB_URI=mongodb://localhost:27017/teams
  - PORT=3000 (for nodemon)
- Running the app:
  - Start mongo server: mongo
  - echo '{"username":"Cory", "password":"things"}' | http post :3000/signin

## Tests
- Testing for expected route endpoints is performed using jest.

## UML
![alt](https://github.com/401-advanced-javascript-1/lab-11-authentication/blob/submission/images/authenticaion-UML.JPG)
