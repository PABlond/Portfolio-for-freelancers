import Header from "./../../models/header"

export const header = async (root, args, context, info) => {
  const data = await Header.find({})
  return data[data.length - 1]
}

export const setHeader = async (root, args, context, info) => {
  const { name, title, subtitle } = args
  const data = await Header.findOne({})
  data.name = name
  data.title = title
  data.subtitle = subtitle
  await data.save().catch(err => console.log("ERROR ", err))
  return { name, title, subtitle }
}
