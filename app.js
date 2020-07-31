require('dotenv').config()
const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('morgan')
const { Route } = require('./routes/default.route')

class App extends Route {
  server() {
    /**
     * @description setup global promise
     */
    mongoose.Promise = global.Promise
    /**
     * @description setup database connection
     */
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
      })
      .then(() => console.log('Database connected'))
      .catch(() => console.log('Database disconnected'))
    /**
     * @description run all plugin middleware
     */
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(logger('dev'))
    /**
     * @description run route middleware
     */
    app.use(super.route())
    /**
     * @description listening server port
     */
    app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`))
  }
}
/**
 * @description initialize application and run application
 */
new App().server()
