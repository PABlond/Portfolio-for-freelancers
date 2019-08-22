import Header from "./../../models/header"
import { IHeader } from "./../../interfaces/header.interface"

export const header = async (root: any, args: any, context: any, info: any) => {
  const data = await Header.find({})
  return data[data.length - 1]
}

export const setHeader = async (
  root: any,
  args: any,
  context: any,
  info: any
) => {
  const { name, title, subtitle } = args
  const data: IHeader = await Header.findOne({})
  data.name = name
  data.title = title
  data.subtitle = subtitle
  await data.save().catch((err: any) => console.log("ERROR ", err))
  return { name, title, subtitle }
}
