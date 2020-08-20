require('module-alias/register')
require('dotenv').config()
const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')
const { Route } = require('routes/default.route')

class App extends Route {
  init() {
    /**
     * @description run all plugin middleware
     */
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(logger('dev'))
    /**
     * @description run route middleware
     */
    app.use(this.route())
    /**
     * @description listening server port
     */
    app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`))
  }
}

/**
 * @description initialize application and run application
 */
new App().init()
