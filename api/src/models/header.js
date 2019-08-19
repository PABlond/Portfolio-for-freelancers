import mongoose from 'mongoose'

const {Schema, model} = mongoose

const headerSchema = new Schema({
    name: String,
    title: String,
    subtitle: String
})

export default model('header', headerSchema)