export interface IMdNode {
  node: {
    html: string
    frontmatter: {
      title: string
    }
  }
}

export interface IImageFluid {
  fluid: {
    aspectRatio: number
    base64: string
    sizes: string
    src: string
    srcSet: string
  }
}

export interface IImageQuery {
  node: {
    childImageSharp: IImageFluid
  }
}
