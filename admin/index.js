const express = require('express')
const app = express()
const port = 5002
app.use(express.static('public'))
app.set('view engine','ejs');
app.set("views","../admin/views");
var cors = require('cors')
app.use(express.static('../public'));
const path = require('path')
app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('category')
})

app.get('/category/post', (req, res) => {
  res.render('category-form')
})

app.get('/category/put', (req, res) => {
  res.render('category-put')
})

app.get('/product', (req, res) => {
    res.render('product')
  })

  app.get('/product/post', (req, res) => {
    res.render('product-form')
  })

  app.get('/product/put', (req, res) => {
    res.render('product-put')
  })


  app.get('/about', (req, res) => {
    res.render('profile')
  })

  app.get('/news', (req, res) => {
    res.render('news')
  })

  app.get('/news/post', (req, res) => {
    res.render('news-form')
  })

  app.get('/news/put', (req, res) => {
    res.render('news-put')
  })


  app.get('/recruitment', (req, res) => {
    res.render('recruitment')
  })

  app.get('/recruitment/post', (req, res) => {
    res.render('recruitment-form')
  })
  app.get('/recruitment/put', (req, res) => {
    res.render('recruitment-put')
  })

app.listen(port, () => {
  console.log(`Admin Vai Duc Vien run ${port}`)
})

const category = require('./router/category/category_router')
app.use(`/router/category`, category);

const product = require('./router/product/product_router')
app.use(`/router/product`, product);

const news = require('./router/news/new_router')
app.use(`/router/news`, news);

const recruitment = require('./router/recuitment/recuitment_router')
app.use(`/router/recruitment`, recruitment);

const profile = require('./router/profile/profile_router')
app.use(`/router/profile`, profile);

// const profile = require('./router/profile/profile_router')
// app.use(`/profile`, profile);

// const banner = require('./router/banner/banner_router')
// app.use(`/banner`, banner);

// const recuitment = require('./router/recuitment/recuitment_router')
// app.use(`/recuitment`, recuitment);

const mongoose = require("../utils/mongoose");

