/**
 * @description import all schema in your application in here
 */
require('utils/connection')
const { MhsSchema } = require('./mhs.model')

class Model {
  mhs() {
    return MhsSchema
  }
}
module.exports = { Model }
