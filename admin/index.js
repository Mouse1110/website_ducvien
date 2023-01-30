const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')
const express = require('express')
const Connect = require('connect-pg-simple')
const session = require('express-session')
const mongoose = require('mongoose')
const Category = require('../models/category')
const Product = require('../models/product')
const Profile = require('../models/profile')
const New = require('../models/news')
const Recruitment = require('../models/recruitment')
const PORT = 5002

const uploadFeature = require('@adminjs/upload')

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}


const start = async () => {
  const app = express()
  mongoose.set("strictQuery", false);
  await mongoose.connect('mongodb+srv://liliang:le2MS6U1NF434cSd@cluster0.a4dtz.mongodb.net/vaiducvien?retryWrites=true&w=majority')
  const adminOptions = {
    // We pass Category to `resources`
    resources: [Product,Profile,New,Recruitment],
  }

  const admin = new AdminJS(adminOptions)
  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()