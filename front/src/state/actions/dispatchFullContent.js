import store from "./../store"
import constants from "./../constants"

export default ({ works, header, about }) =>
  store.dispatch({
    type: constants.getContent.name,
    payload: { works, header, about },
  })
