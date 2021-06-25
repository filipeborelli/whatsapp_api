import mongoose from 'mongoose'
mongoose.connect(`mongodb://localhost/whatsapichama`, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise
module.exports = mongoose
