const express = require('express')
const app = express()
const port = 5002
app.use(express.static('public'))
app.set('view engine','ejs');
app.set("views","./admin/views");
var cors = require('cors')
app.use(express.static('public'))
const path = require('path')
app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/news', (req, res) => {
    res.render('news')
  })

  app.get('/profile', (req, res) => {
    res.render('profile')
  })

  app.get('/recuitment', (req, res) => {
    res.render('recuitment')
  })

app.listen(port, () => {
  console.log(`Admin Vai Duc Vien run ${port}`)
})

// const product = require('./router/product/product_router')
// app.use(`/category`, product);

const news = require('./router/news/new_router')
app.use(`/router/news`, news);

// const profile = require('./router/profile/profile_router')
// app.use(`/profile`, profile);

// const banner = require('./router/banner/banner_router')
// app.use(`/banner`, banner);

// const recuitment = require('./router/recuitment/recuitment_router')
// app.use(`/recuitment`, recuitment);

const mongoose = require("../utils/mongoose");

