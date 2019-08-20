import axios from "axios"
import { getUser } from "./auth"

export default async (description: any) => {
  const query = JSON.stringify(
    description
      .map((desc: any) => encodeURIComponent(desc.content))
      .filter(Boolean)
  )

  const response: any = await axios
    .get(
      `https://fir-fiverr-a2e6b.appspot.com/graphql?query={
    setAboutDesc(description: ${query}, token: ${getUser().token}) {      
      description {
        content
      }
    }
  }`
    )
    .catch(err => console.log(err))
  return response.data.data.setAboutDesc.description
}
