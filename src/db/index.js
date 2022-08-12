const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/rumah-sakit")

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connect Error!'))
db.once('open', () => {
    console.log('Database is Connected')
})