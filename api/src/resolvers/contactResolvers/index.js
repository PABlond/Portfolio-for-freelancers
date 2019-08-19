import Contact from "./../../models/contact"
import jwt from "jsonwebtoken"
import sendMail from './../../utils/sendMail'

export const contact = async (root, args, context, info) => {
  const { token } = args
  const { JWT_SECRET } = process.env
  const isLogged = await jwt.verify(
    token,
    JWT_SECRET,
    async (err, decoded) => !!decoded
  )
  return isLogged ? await Contact.find({}) : []
}

export const isRead = async (root, args, context, info) => {
  const { _id, token } = args
  const { JWT_SECRET } = process.env
  const isLogged = await jwt.verify(
    token,
    JWT_SECRET,
    async (err, decoded) => !!decoded
  )
  if (isLogged) {
    const data = await Contact.findOne({ _id })
    data.isRead = true
    await data.save()
  }
  return isLogged ? await Contact.find({}) : []
}


export const sendMessage = async (root, args, context, info) => {
    const { name, email, content } = args
    await new Contact({ name, email, content }).save()
    const isSent = await sendMail({ name, email, content })
    return "args"
  }