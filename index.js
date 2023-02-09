const express = require('express')
const app = express()
const port = 5001

var cors = require("cors")
app.use(express.static('public'))
app.use(cors())
app.set('view engine','ejs');
app.set("views","./views/");

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/product', (req, res) => {
  res.render('product-list')
})

app.get('/product/index', (req, res) => {
  res.render('product')
})

app.get('/news', (req, res) => {
  res.render('news-list')
})

app.get('/news/index', (req, res) => {
  res.render('news')
})

app.get('/about', (req, res) => {
  res.render('about-us')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/recruitment', (req, res) => {
  res.render('recruitment-list')
})

app.get('/recruitment/:id', (req, res) => {
  res.render('recruitment')
})

const site = require('./controller')
app.use(`/client`, site);
require("./utils/mongoose");

app.listen(port, () => {
  console.log(`Admin LILIANG run ${port}`)
})