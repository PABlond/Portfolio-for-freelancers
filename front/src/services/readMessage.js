import axios from "axios"
import { getUser } from "./auth"

export default async ({_id}) => {

  const { token } = getUser()
  const response = await axios
    .get(
      `https://fir-fiverr-a2e6b.appspot.com/graphql?query={
            isRead(_id: "${_id}", token: "${token}") {
                email
                content
                name
                at
                _id
                isRead
            }
        }`
    )
    .catch(err => console.log(err))
    const contact = response.data.data.isRead
    return {contact}
}
