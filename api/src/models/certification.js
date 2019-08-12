import mongoose from 'mongoose'

const {Schema, model} = mongoose

const certifSchema = new Schema({
    _id: String,
    original: String,
    thumbnail: String
})

export default model('certifications', certifSchema)