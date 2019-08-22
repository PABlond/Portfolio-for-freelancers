import mongoose from "mongoose"

export interface IUser extends mongoose.Document {
  _id: string
  username: string
  password: string
}
