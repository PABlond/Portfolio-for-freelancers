import About from "./../../models/about"
import Certification from './../../models/certification'

export const about = async (root, args, context, info) => {
  const data = await About.find({})
  return data[data.length - 1]
}

export const setAboutDesc = async (root, args, context, info) => {
  const { description } = args
  const data = await About.findOne({})
  data.description = description.map(content => ({ content }))
  await data.save().catch(err => console.log("ERROR ", err))
  return data
}

export const certifications = async (root, args, context, info) => {
  const data = await Certification.find({})
  return data
}
