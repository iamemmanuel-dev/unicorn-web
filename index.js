const express = require('express')
const cookieParser = require('cookie-parser')
const connectDB = require('./connection/database')
const auth_router = require('./router/authRoute')
const post_router = require('./router/postRoute')
const globalErrors = require('./errors/globalErrors')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

connectDB()
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//routes
app.use('/api', auth_router)
app.use('/api/posts', post_router)

//error
app.all('*', (req, res, next) => {
  const Err = new Error(
    `Oops, the route "${req.originalUrl}" does not exist on this server`
  )
  Err.statusCode = 404
  next(Err)
})

app.use(globalErrors)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('server listening'))
