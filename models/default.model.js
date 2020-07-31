/**
 * @description import all schema in your application in here
 */
const { MhsSchema } = require('./mhs.model')

class Model {
  mhs() {
    return MhsSchema
  }
}
module.exports = { Model }
