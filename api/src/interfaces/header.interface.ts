import mongoose from 'mongoose'

export interface IHeaderSchema {
  name: string
  title: string
  subtitle: string
}
export interface IHeader extends mongoose.Document {
  name: IHeaderSchema["name"]
  title: IHeaderSchema["title"]
  subtitle: IHeaderSchema["subtitle"]
}
