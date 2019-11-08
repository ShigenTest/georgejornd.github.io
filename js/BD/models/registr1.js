var mongoose = require("mongoose")
var session = require('express-session')
var MongoStore = require('connect-mongo')(session);

//...

app.use(session({
  secret: 'i need more beers',
  resave: false,
  saveUninitialized: false,
  // Место хранения можно выбрать из множества вариантов, это и БД и файлы и Memcached.
  store: new MongoStore({
    url: 'mongodb://user12345:foobar@localhost/test-app',
  })
}))
