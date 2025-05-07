const express = require('express')
const dotenv = require('dotenv')
const config = require('./config.js')
const productsRoutes = require('./routes/ProductsRoutes.js')

// DBCONNECT

dotenv.config()
config()


const app = express()
app.use(express.json())

// Api Routes

app.use('/api',productsRoutes)

const PORT = process.env.PORT || 5001


app.listen(PORT, () => {
    console.log(`Server is running https://localhost:${PORT}`)
})