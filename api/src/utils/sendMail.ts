import nodemailer from "nodemailer"
import { IContact } from "./../interfaces/contact.interface"

const { GMAIL_USER, GMAIL_PASSWORD } = process.env

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD
  }
})

export default async (email: string, name: string, content: string) => {
  const mailOptions = {
    from: email,
    to: GMAIL_USER,
    subject: "New form submission from your portfolio",
    html: `
        <h4>email: ${email}</h4>
        <h4>name: ${name}</h4>
        <p>content: ${content}</p>
        `
  }

  const response: any = await transporter
    .sendMail(mailOptions)
    .catch((err: any) => false)

  return !!response
}
