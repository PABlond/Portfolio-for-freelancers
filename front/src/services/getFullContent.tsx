import axios from "axios"

export default async () => {
  const response = await axios.get(`https://fir-fiverr-a2e6b.appspot.com/graphql?query={
        works {
          title
          image,
          content,
          technos
        }
        header {
          name
          title
          subtitle
        }
        about {
          img {
            href
            alt
          } 
          certifications {
            thumbnail
          } 
          skills {
            title
            nodes {
              id
              group
            }
            links {
              source
              target
              value
            }
            
          }
          description {
            content
          }
        }
      }`)

  const { works, certifications, header, about } = response.data.data
  return { works, certifications, header, about }
}
