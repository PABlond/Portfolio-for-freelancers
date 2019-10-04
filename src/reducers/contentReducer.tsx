import initialState from "./initialState"
import { dispatchContent, dispatchResume } from "../config/constants"
import {IState} from './../interfaces/state.interface'

export default (
  state = (initialState as IState),
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
    case dispatchResume:
      return {
        ...state,
        resume: {
          header: payload.header,
          about: payload.about,
          works: payload.works
        }
      }
    default:
      return state
  }
}
