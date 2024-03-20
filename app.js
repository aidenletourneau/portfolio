const express = require('express');
const morgan = require('morgan');


const app = express();

//view engine for html
app.listen(10000);
app.use(express.static('public'));
app.use(morgan('dev'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('home');
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio');
})

app.get('/resume', (req, res) => {
  res.render('resume');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.use((req, res) => {
  res.status(404).render('404');
})
