import mongoose from 'mongoose'
mongoose.connect(`mongodb://localhost/whatsappapiv2`, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise
module.exports = mongoose
