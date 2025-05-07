const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();



module.exports = () => {
  mongoose.connect(process.env.DataBaseConnectUrl)

  mongoose.connection.on('open',() => {
    console.log('MongoDB Connected')
  })

  mongoose.connection.on('error', (err) => {
    console.log("MongoDB Error", err);
    
  })


  mongoose.Promise = global.Promise
}
