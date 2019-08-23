import mongoose from 'mongoose'

export interface IWork extends mongoose.Document {
  title: string
  image: string
  content: string
  technos: string
  position: number
}
