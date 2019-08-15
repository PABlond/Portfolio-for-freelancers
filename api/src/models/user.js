import mongoose from 'mongoose'

const {Schema, model} = mongoose

const userSchema = new Schema({
    _id: String,
    username: String,
    password: String
})

export default model('users', userSchema)