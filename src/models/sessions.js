import mongoose from '../database'

const ClientSessionSchema = new mongoose.Schema({
    session: {
        type: String,
        require: true,
    },
    webhook: {
        type: String,
        require: true,
    },
    clientID: {
        type: String,
        require: true,
    },
    serverToken: {
        type: String,
        require: true,
    },
    clientToken: {
        type: String,
        require: true,
    },
    encKey: {
        type: String,
        require: true,
    },
    macKey: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const ClientSession = mongoose.model('ClientSession', ClientSessionSchema)
