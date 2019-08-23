import axios from "axios"
import constants from "./../state/constants"

export default async ({email, name, content}: any) => {
  const {api: {url}} = constants
  const response: any = await axios
    .get(
      `${url}/graphql?query={
            sendMessage(email: "${email}", name: "${name}", content: "${content}")
        }`
    )
    .catch(err => console.log(err))
  return response.data.data.sendMessage
}
