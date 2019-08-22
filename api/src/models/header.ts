import { model, Schema } from 'mongoose'
import {IHeader} from './../interfaces/header.interface'

const headerSchema: Schema = new Schema({
    name: String,
    title: String,
    subtitle: String
})

export default model<IHeader>('header', headerSchema)