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
        certifications: payload.certifications,
      }
    default:
      return state
  }
}
