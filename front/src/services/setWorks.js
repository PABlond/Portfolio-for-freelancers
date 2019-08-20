import axios from "axios"
import { getUser } from "./auth"

export default async works => {
  const query = JSON.stringify(works.map((work, i) => JSON.stringify(work)).filter(Boolean))

  const response = await axios
    .get(
      `https://fir-fiverr-a2e6b.appspot.com/graphql?query={
        setWorks(works: ${query}, token: ${getUser().token}) {
          title
          image
          content
          technos
        }
      }
      `
    )
    .catch(err => console.log(err))
  return response.data.data.setWorks
}
