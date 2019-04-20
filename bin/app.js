var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose')
var book = require('./routes/book');
var config = require('./config')
    //db conn
mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useNewUrlParser: true }).then(() => {
    console.log('connection successfull....')
}).catch((err) => {
    console.log(err)
})

var app = express();
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.set('view engine', 'ejs');
//enable cors here
app.use(enableCors);
app.use('/books', book);

function enableCors(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-with,Content-Type,Accept');
    next();
}
//catch 404 and forward to the error handler

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err)
});
// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.send('error ' + err);
});
module.exports = app;
