const { Model } = require('../models/default.model')

class MhsController extends Model {

  async resultsController(req, res, next) {
    const user = await super.mhs().find().lean()
    if (!user) {
      return res.status(404).json({
        method: req.method,
        status: res.statusCode,
        msg: 'Oops..user account is not exist or deleted from owner'
      })
    }

    return res.status(200).json({
      method: req.method,
      status: res.statusCode,
      msg: 'Yeah..data already to use',
      data: user
    })
  }

  async createController(req, res, next) {
    const user = await super.mhs().findOne({ nama: req.body.nama }).lean()
    if (user) {
      return res.status(409).json({
        method: req.method,
        status: res.statusCode,
        msg: 'Oops..user account already exist'
      })
    }

    super.mhs().create({
      nama: req.body.nama,
      npm: req.body.npm,
      bid: req.body.bid,
      fak: req.body.fak,
      created_at: new Date()
    })

    return res.status(200).json({
      method: req.method,
      status: res.statusCode,
      msg: 'Yeah..data successfuly to store in database'
    })
  }

  async resultController(req, res, next) {
    const { id } = req.params
    const user = await super.mhs().findById(id).lean()
    if (!user) {
      res.status(404).json({
        method: req.method,
        status: res.statusCode,
        msg: 'Oops..user account is not exist or deleted from owner'
      })
    }

    return res.status(200).json({
      method: req.method,
      status: res.statusCode,
      msg: 'Yeah..data already to use',
      data: user
    })
  }

  async deleteController(req, res, next) {
    const { id } = req.params
    const user = await super.mhs().findOneAndDelete({ _id: id }).lean()
    if (!user) {
      res.status(404).json({
        method: req.method,
        status: res.statusCode,
        msg: 'Oops..user account is not exist or deleted from owner'
      })
    }

    return res.status(200).json({
      method: req.method,
      status: res.statusCode,
      msg: 'Yeah..data successfuly to deleted'
    })
  }

  async updateController(req, res, next) {
    const { id } = req.params
    const { nama, npm, bid, fak } = req.body
    const user = await super.mhs().findOneAndUpdate({ _id: id }, { $set: { nama, npm, bid, fak } }).lean()

    if (!user) {
      res.status(404).json({
        method: req.method,
        status: res.statusCode,
        msg: 'Oops..user account is not exist or deleted from owner'
      })
    }

    return res.status(200).json({
      method: req.method,
      status: res.statusCode,
      msg: 'Yeah..data successfuly to updated'
    })
  }
}

module.exports = { MhsController }
