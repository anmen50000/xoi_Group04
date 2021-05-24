const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const { join } = require('path');
const app = express();
const port = 3000;
const route = require ('./routes');
const db = require('./config/db');
const methodOverride = require('method-override')
// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'))




//Http logger
// app.use(morgan('combined'));

// template enginer
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers:{
    sum: (a , b) => a + b, 
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// route init 
route(app);

app.listen(port, () => {console.log(`App listening at http://localhost:${port}`);});