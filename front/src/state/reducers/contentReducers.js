import initialState from "./initialState"
import constants from "./../constants"

export default (state = initialState.content, action) => {
  const { getContent } = constants
  const { type, payload } = action
  switch (type) {
    case getContent.name:
      return {
        ...state,
        works: payload.works,
        header: {
          name: payload.header.name,
          title: payload.header.title,
          subtitle: payload.header.subtitle,
        },
        about: payload.about
      }
    default:
      return state
  }
}
