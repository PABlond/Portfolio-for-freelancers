import axios from "axios"
import { getUser } from "./auth"

export default async () => {
  const { token }: {token: string} = getUser()
  const response = await axios.get(`https://fir-fiverr-a2e6b.appspot.com/graphql?query={
    contact (token: "${token}") {
      email
      content
      name
      at
      _id
      isRead
    }
  }`)
  const { contact }: any = response.data.data
  console.log("contact", contact)
  return { contact }
}
