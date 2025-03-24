require('dotenv').config();

const sequelize = require('./backend/models/index');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const flash = require('express-flash');
const helmet = require('helmet');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const jwt = require();

// Importer les modèles
const Users = require('./backend/models/Users');
const Categories = require('./backend/models/Categories');
const Favorites = require('./backend/models/Favorites');
const Orders_items = require('./backend/models/Orders_items');
const Orders = require('./backend/models/Orders');
const Products_promo = require('./backend/models/Products_promo');
const Products = require('./backend/models/Products');
const Promotions = require('./backend/models/Promotions');
const Reviews = require('./backend/models/Reviews');
const Shopping_card = require('./backend/models/Shopping_card');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
