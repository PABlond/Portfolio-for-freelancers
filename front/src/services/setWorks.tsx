import axios from "axios"
import { getUser } from "./auth"

export default async (works: any) => {
  const query = JSON.stringify(
    works.map((work: any) => JSON.stringify(work)).filter(Boolean)
  )

  const response: any = await axios
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
  const { data }: any = response.data
  return data.setWorks
}
