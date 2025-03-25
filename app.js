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
const cors = require('cors');
const bodyParser = require('body-parser');
// const jwt = require();
const port = 3000;

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
const product_cards = require('./backend/models/productsCard.js')

// Importer les routes
const indexRouter = require('./backend/routes/index');
const usersRouter = require('./backend/routes/users');
const categoriesRouter = require('./backend/routes/categories');
const shoppingCardRouter = require('./backend/routes/shoppingCard');
const productsRouter = require('./backend/routes/products');
const productsCardsRouter = require('./backend/routes/productsCard.js');
const orderRouter = require('./backend/routes/orders');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// configuration du moteur de vues
app.set('views', [ 
  path.join(__dirname, 'views'),
  path.join(__dirname, 'views/admin'),
  path.join(__dirname, 'views/products'),
]);
app.set('view engine', 'ejs');

// Middlewares globaux
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());
app.use(xssClean());
app.use(helmet());

// configuration de la session
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 30
  }
}));

// Initialiser Flash
app.use(flash());

//Middleware pour rendre Flash accessible dans les vues
app.use((req, res, next) => {
  res.locals.error_conn = "";
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
})
app.use(limiter);
// Déclaration des routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter)
app.use('/categories', categoriesRouter);
app.use('/s/my/shopping-card', shoppingCardRouter);
app.use('/s/explore', productsCardsRouter);
app.use('/s/order', orderRouter);

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

app.listen(port, () => {
  console.log(`✅ App is listening on port ${port}`);
})

// Synchronisation avec MySQL
sequelize.sync({ force: false })
    .then(() => console.log('✅ Base de données synchronisée avec Sequelize !'))
    .catch(err => console.log('❌ Erreur de synchronisation de la BDD :', err));


module.exports = app;
