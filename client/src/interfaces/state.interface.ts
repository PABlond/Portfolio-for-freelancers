import { IHTMLParsed } from "./module.interface"
import {IImageFluid} from './query.interface'

export interface IState {
  header: IHTMLParsed
  about: IHTMLParsed
  works: IHTMLParsed
  certifications: IImageFluid[]
}
