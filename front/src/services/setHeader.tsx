import axios from "axios"
import { getUser } from "./auth"
import constants from "./../state/constants"

export default async ({ name, title, subtitle }: any) => {
  const {api: {url}} = constants
  const response: any = await axios
    .get(
      `${url}/graphql?query={
            setHeader(name: "${name}", title: "${title}", subtitle: "${subtitle}", token: "${
        getUser().token
      }") {      
                name
                title
                subtitle   
            }
        }`
    )
    .catch(err => console.log(err))
  return response.data.data.setHeader
}
