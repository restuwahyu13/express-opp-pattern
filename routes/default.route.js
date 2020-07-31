/**
 * @description import all route in your application in here
 */
const { MhsRoute } = require('./mhs.route')

class Route {
  route() {
    return [new MhsRoute().route()]
  }
}

module.exports = { Route }
