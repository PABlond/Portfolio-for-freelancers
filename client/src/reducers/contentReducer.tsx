import initialState from "./initialState"
import { dispatchContent } from "../config/constants"

export default (
  state = initialState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action
  switch (type) {
    case dispatchContent:
      return {
        ...state,
        header: payload.header,
        about: payload.about,
        certifications: payload.certifications,
        works: payload.works
      }
    default:
      return state
  }
}
