var express = require('express');
var mongoose = require('mongoose');
var Book = require('../models/Book');
var router = express.Router();
var sampleBooks = require('../models/books.json')
    //GET ALL Bookes
router.get('/', function(req, res, next) {

    Book.find((err, data) => {
            if (err) return next(err);
            res.json(data)
        })
        //res.json(sampleBooks)
});
//GET SINGLE BOOK
router.get('/details/:id', (req, res, next) => {
    Book.findById(req.params.id, (err, book) => {
            if (err) return next(err);
            res.json(book);
        })
        // res.json(sampleBooks[req.params.id])
});
// SAVE BOOK
router.post('/create', (req, res, next) => {
    Book.create(req.body, (error, book) => {
        if (error) return next(error);
        console.log(book);
        res.json(book);
    });
    //res.json({ 'message': 'success' })

});
//UPDATE BOOK
router.put('/:id', (req, res, next) => {
    Book.findOneAndUpdate(req.params.id, req.body, (err, book) => {
        if (err) return next(err);
        res.json(book);
    });
});
//DELETE BOOK
router.delete('/:id', (req, res, next) => {
    Book.findByIdAndRemove(req.params.id, (err, result) => {
        //
        if (err) return next(err);
        res.json(result);
    })
})
module.exports = router;