export interface IDescription {
  content: string
}

export interface ISkill {
  title: string
  nodes: ISkillNode[]
  links: ISkillLink[]
}

export interface ISkillNode {
  group: string
  id: string
}

export interface ISkillLink {
  source: string
  target: string
  value: string
}

export interface ISkillTab {
  title: string
  data: {
    nodes: any
    links: any
  }
}

export interface IAbout {
  img: {
    href: string
    alt: string
  }
  description: IDescription[]
}

export interface IShowEdit {
  value: boolean
  str: string
  i: number
}

export interface ICertification {
    thumbnail: string 
}
