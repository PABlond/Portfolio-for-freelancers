import { IHTMLParsed } from "./module.interface"
import { IImageFluid } from "./query.interface"

export interface IResumeWork {
  title: string
  content: string
  technos: string
  __html: string
  n: number
}

export interface IResumeHeader {
  name: string
  title: string
}

export interface IState {
  header: IHTMLParsed
  about: IHTMLParsed
  works: IHTMLParsed
  certifications: IImageFluid[]
  resume?: {
    works: IResumeWork[] | undefined
    header?: IResumeHeader
  }
}
