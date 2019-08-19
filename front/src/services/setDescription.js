import axios from "axios"

export default async description => {
  const query = JSON.stringify(
    description
      .map((desc, i) => encodeURIComponent(desc.content))
      .filter(Boolean)
  )

  const response = await axios
    .get(
      `https://fir-fiverr-a2e6b.appspot.com/graphql?query={
    setAboutDesc(description: ${query}) {      
      description {
        content
      }
    }
  }`
    )
    .catch(err => console.log(err))
  return response.data.data.setAboutDesc.description
}
