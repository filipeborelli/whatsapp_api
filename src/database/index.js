import mongoose from 'mongoose'
mongoose.connect(`mongodb://localhost/apiwhatsappt`, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise
module.exports = mongoose
