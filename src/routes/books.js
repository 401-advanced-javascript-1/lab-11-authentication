'use strict';
/**
 * Books router (users-model.js)
 * Routes paths for book-app after authentication
 * @module src/routes/books.js
 */
const express = require('express');
const router = express.Router();
const auth = require('../auth/middleware.js')

router.get('/books', auth, handleGetAll);
router.get('/books/:id', auth, handleGetOne);

// Route Handlers
/**
 * Gets all books from DB
 * @param {object} req 
 * @param {object} res 
 * @param {function} next 
 */
function handleGetAll(req, res, next) {
  let books = {
    count: 3,
    results: [
      { title:'Moby Dick' },
      { title:'Little Women' },
      { title: 'Eloquent Javascript' },
    ],
  };
  res.status(200).json(books);
}

/**
 * Gets a book from DB by id
 * @param {object} req 
 * @param {object} res 
 * @param {function} next 
 */
function handleGetOne(req, res, next) {
  let book = {
    title:'Moby Dick',
  };
  res.status(200).json(book);
}

module.exports = router;
