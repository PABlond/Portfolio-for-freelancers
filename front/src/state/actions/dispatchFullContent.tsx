import store from "./../store"
import constants from "./../constants"

export default ({api: { works, header, about, contact }, md}: any) =>{
  const description = md.map(plugin => {
    return plugin.node.frontmatter.title == "about" ? plugin.node.html : null
  }).filter(Boolean)[0]
  return store.dispatch({
    type: constants.getContent.name,
    payload: { works, header, about, contact, md, description },
  })
}