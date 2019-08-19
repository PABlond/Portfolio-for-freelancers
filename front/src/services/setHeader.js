import axios from "axios"

export default async ({ name, title, subtitle }) => {
  const response = await axios
    .get(
      `https://fir-fiverr-a2e6b.appspot.com/graphql?query={
            setHeader(name: "${name}", title: "${title}", subtitle: "${subtitle}") {      
                name
                title
                subtitle   
            }
        }`
    )
    .catch(err => console.log(err))
  return response.data.data.setHeader
}
