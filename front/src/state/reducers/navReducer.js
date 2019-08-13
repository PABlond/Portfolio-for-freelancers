import initialState from "./initialState"
import constants from "./../constants"

export default (state = initialState.nav, action) => {
  const { setNav } = constants
  const { type, payload } = action
  switch (type) {
    case setNav.name:
      return {
        ...state,
        isMobile: payload.isMobile,
        width: payload.innerWidth,
        height: payload.innerHeight,
      }
    default:
      return state
  }
}
