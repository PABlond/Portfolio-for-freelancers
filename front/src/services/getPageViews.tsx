import axios from "axios"
import constants from "./../state/constants"
import { getUser } from "./auth"

export default async (from: string, to: string) => {
  const {
    api: { url },
  } = constants
  const response: any = await axios
    .get(
      `${url}/graphql?query={
            getPageViews(from: "${from}", to: "${to}", token: "${getUser().token}") {
              traffic {
                date
                pageViews
                timeOnPage
              }
              op {
                device
                count
              }
            }
  
        }`
    )
    .catch(err => console.log(err))
    console.log(response)
  if (Object.keys(response).indexOf("errors") == -1)
    return response.data.data.getPageViews
  return []
}
