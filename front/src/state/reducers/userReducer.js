import initialState from "./initialState"
import constants from "./../constants"

export default (state = initialState.user, action) => {
  const { login } = constants
  const { type, payload } = action
  switch (type) {
    case login.name:
      return {
        ...state,
        isLogged: true,
        token: payload.token
      }
    default:
      return state
  }
}
