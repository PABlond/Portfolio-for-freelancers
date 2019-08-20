import axios from "axios"
import { getUser } from "./auth"

export default async ({_id}: {_id: string}) => {

  const { token } = getUser()
  const response: any = await axios
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
    const contact: any = response.data.data.isRead
    return {contact}
}
