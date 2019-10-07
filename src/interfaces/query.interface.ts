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

export interface IHeadProps {
  siteUrl: string
  defaultTitle: string
  defaultDescription: string
  themeColor: string
  pageName?: string
}

export interface IAllMarkdownRemark {
  edges: IMdNode[]
}

export interface IHomeData {
  allMarkdownRemark: IAllMarkdownRemark
  allFile: {
    edges: {
      node: {
        childImageSharp: IImageFluid
      }
    }[]
  }
  site: {
    siteMetadata: IHeadProps
  }
}

export interface IResumeData {
  allMarkdownRemark: IAllMarkdownRemark
}
