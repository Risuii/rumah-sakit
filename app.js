// import express
const express = require('express');

const app = express();

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/rumah-sakit")

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connect Error!'))
db.once('open', () => {
    console.log('Database is Connected')
})

// get port from env, if env not set, use 3000
const PORT = process.env.PORT || 3000;

// use middleware for request parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// import routes
const router = require('./src/routes');

// use route
app.use(router);

// run app in port specified
app.listen(PORT, () => {
  console.log(`App is running in http://localhost:${PORT}`);
});
