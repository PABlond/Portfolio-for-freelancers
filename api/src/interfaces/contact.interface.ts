import {Document} from 'mongoose'

export interface IContact extends Document {
    email: string,
    name: string,
    content: string
    isRead: boolean
}