import initialState from "./initialState"
import constants from "./../constants"

export default (state = initialState.content, action) => {
  const { getContent, setDesc } = constants
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
    case setDesc.name: 
      return {...state,
      about: {
        ...state.about,
        description: payload.description
      }}
    default:
      return state
  }
}
