import axios from "axios"
import { getUser } from "./auth"
import constants from "./../state/constants"

export default async () => {
  const {api: {url}} = constants
  const { token }: { token: string } = getUser()
  const response = await axios.get(`${url}/graphql?query={
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
  return { contact }
}
