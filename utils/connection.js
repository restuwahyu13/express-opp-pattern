const mongoose = require('mongoose')
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
    useFindAndModify: false
  })
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Database disconnected'))
