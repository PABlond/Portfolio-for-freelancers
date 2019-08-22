import mongoose from 'mongoose'
import { Schema, model } from "mongoose"
import {IUser} from './../interfaces/user.interface'

const userSchema: Schema = new Schema({
    _id: String,
    username: String,
    password: String
})

export default model<IUser>('users', userSchema)