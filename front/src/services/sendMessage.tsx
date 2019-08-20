import axios from "axios"

export default async ({email, name, content}: any) => {
  const response: any = await axios
    .get(
      `https://fir-fiverr-a2e6b.appspot.com/graphql?query={
            sendMessage(email: "${email}", name: "${name}", content: "${content}")
        }`
    )
    .catch(err => console.log(err))
  return response.data.data.sendMessage
}
