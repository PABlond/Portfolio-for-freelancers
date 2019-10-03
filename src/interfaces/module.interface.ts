import { IImageFluid } from "./query.interface"

export interface IHTMLParsed {
  __html: string
}

export interface IHeader {
  header: IHTMLParsed
}

export interface IWorks {
  works: IHTMLParsed
}

export interface IAbout {
  about: IHTMLParsed
}

export interface ICertifications {
  certifications: IImageFluid[]
}
