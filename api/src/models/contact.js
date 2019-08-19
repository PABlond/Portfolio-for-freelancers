import mongoose from 'mongoose'

const {Schema, model} = mongoose

const contactSchema = new Schema({
    name: String,
    email: String,
    content: String,
    isRead: {
        type: Boolean,
        default: false
      },
    at: {
        type: Date,
        default: Date.now
      }
})

export default model('contact', contactSchema)