import Contact from "./../../models/contact"
import { IContact } from "./../../interfaces/contact.interface"
import sendMail from "./../../utils/sendMail"
import checkToken from "./../../utils/checkToken"

export const contact = async (root: any, args: any, context: any, info: any) =>
  (await checkToken(args.token)) ? await Contact.find({}) : []

export const isRead = async (root: any, args: any, context: any, info: any) => {
  const { _id, token }: {_id: string, token: string} = args
  const isLogged: boolean = await checkToken(token)
  if (isLogged) {
    const data = await Contact.findOne({ _id })
    data.isRead = true
    await data.save()
  }
  return isLogged ? await Contact.find({}) : []
}

export const sendMessage = async (
  root: any,
  args: any,
  context: any,
  info: any
) => {
  const { name, email, content }: IContact = args
  await new Contact({ name, email, content }).save()
  const isSent:boolean = await sendMail(name, email, content)
  return "args"
}
