import axios from "axios"
import { getUser } from "./auth"
import constants from "./../state/constants"

export default async (works: any) => {
  const {api: {url}} = constants
  const query = JSON.stringify(
    works.map((work: any) => JSON.stringify(work)).filter(Boolean)
  )
  console.log('works', works)

  const response: any = await axios
    .get(
      `${url}/graphql?query={
        setWorks(works: ${query}, token: "${getUser().token}") {
          title
          image
          content
          technos
        }
      }
      `
    )
    .catch(err => console.log(err))
  const { data }: any = response.data
  return data.setWorks
}
