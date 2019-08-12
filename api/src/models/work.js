import mongoose from 'mongoose'

const {Schema, model} = mongoose

const worksSchema = new Schema({
    _id: String,
    title: String,
    image: String,
    content: String,
    technos: String
})

export default model('works', worksSchema)