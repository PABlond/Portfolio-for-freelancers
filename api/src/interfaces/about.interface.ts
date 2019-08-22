import mongoose from "mongoose"

export interface IAboutDesc {
  description: string
}

interface IAboutSkillNode {
  id: string
  group: number
}

interface IAboutSillLink {
    source: string
    target: string
    value: number
  }

export interface IAboutSkill {
  title: string
  nodes: IAboutSkillNode[]
  links: IAboutSillLink[]
}

export interface IAboutCertification {
  original: string
  thumbnail: string
}

export interface IAbout extends mongoose.Document {
  //   _id: string,
  img: {
    href: string
    alt: string
  }
  description: IAboutDesc[]
  skills: IAboutSkill[]
  certifications: IAboutCertification[]
}
