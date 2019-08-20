import axios from "axios"
import { getUser } from "./auth"

export default async ({ name, title, subtitle }: any) => {
  const response: any = await axios
    .get(
      `https://fir-fiverr-a2e6b.appspot.com/graphql?query={
            setHeader(name: "${name}", title: "${title}", subtitle: "${subtitle}", token: "${getUser().token}") {      
                name
                title
                subtitle   
            }
        }`
    )
    .catch(err => console.log(err))
  return response.data.data.setHeader
}
