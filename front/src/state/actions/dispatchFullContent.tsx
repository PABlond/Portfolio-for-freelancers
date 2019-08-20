import store from "./../store"
import constants from "./../constants"

export default ({ works, header, about, contact }: any) =>
  store.dispatch({
    type: constants.getContent.name,
    payload: { works, header, about, contact },
  })
