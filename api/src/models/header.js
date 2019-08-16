import mongoose from 'mongoose'

const {Schema, model} = mongoose

const headerSchema = new Schema({
    _id: String,
    name: String,
    title: String,
    subtitle: String
})

export default model('header', headerSchema)