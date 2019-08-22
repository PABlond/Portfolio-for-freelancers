import About from "./../../models/about"
import Certification from "./../../models/certification"

export const about = async (
  root: any,
  args: any,
  context: any,
  info: any
) => {
  const data = await About.find({})
  return data[data.length - 1]
}

export const setAboutDesc = async (
  root: any,
  args: any,
  context: any,
  info: any
) => {
  const { description } = args
  const data = await About.findOne({})
  data.description = description.map((content: string) => ({ content }))
  await data.save().catch((err: any) => console.log("ERROR ", err))
  return data
}

export const certifications = async (
  root: any,
  args: any,
  context: any,
  info: any
) => {
  const data = await Certification.find({})
  return data
}
