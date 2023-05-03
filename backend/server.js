const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const mongoDBConnexion = require('./config/db')
const port = process.env.PORT || 5000

mongoDBConnexion()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/movies', require('./routes/moviesRoutes'))
app.use('/api/user', require('./routes/usersRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server start on port ${port}`.blue))