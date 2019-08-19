import axios from "axios"
import { getUser } from "./auth"

export default async () => {
  const { token } = getUser()
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
  const { contact } = response.data.data
  return { contact }
}
