import { Schema, model } from "mongoose"
import { IContact } from "./../interfaces/contact.interface"

const contactSchema: Schema = new Schema({
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

export default model<IContact>("contact", contactSchema)
