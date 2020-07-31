/**
 * @description import all controller in your application in here
 */
const { MhsController } = require('./mhs.controller')

class Controller {
  mhs() {
    return new MhsController()
  }
}
module.exports = { Controller }
