import axios from "axios"
import constants from "./../state/constants"

export default async () => {
  const {api: {url}} = constants
  const response = await axios.get(`${url}/graphql?query={
        works {
          title
          image,
          content,
          technos
          position
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
