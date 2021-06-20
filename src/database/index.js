import mongoose from 'mongoose'
mongoose.connect(`mongodb://localhost/apiwhatsapp`, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise
module.exports = mongoose
