import axios from "axios"
import constants from "./../state/constants"

export default async () => {
  const {
    api: { url },
  } = constants
  const response: any = await axios
    .get(
      `${url}/graphql?query={
            getPageViews(from: "", token: "") {
                new
                returning
            }
        }`
    )
    .catch(err => console.log(err))
    
  return response.data.data.getPageViews
}
