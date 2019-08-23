import axios from "axios"
import { getUser } from "./auth"
import constants from "./../state/constants"

export default async (description: any) => {
  const {api: {url}} = constants
  const query = JSON.stringify(
    description
      .map((desc: any) => encodeURIComponent(desc.content))
      .filter(Boolean)
  )

  const response: any = await axios
    .get(
      `${url}/graphql?query={
    setAboutDesc(description: ${query}, token: "${getUser().token}") {      
      description {
        content
      }
    }
  }`
    )
    .catch(err => console.log(err))
  return response.data.data.setAboutDesc.description
}
