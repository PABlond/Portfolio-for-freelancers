import React from "react"
import { Helmet } from "react-helmet"

interface IHeadProps {
  siteUrl: string
  defaultTitle: string
  defaultDescription: string
  themeColor: string
  pageName?: string
}

export default ({
  data: { siteUrl, defaultDescription, defaultTitle, themeColor, pageName },
}: {
  data: IHeadProps
}) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{pageName || defaultTitle}</title>
    <link rel="canonical" href={siteUrl} />
    <meta name="description" content={defaultDescription} />
    <meta name="theme-color" content={themeColor || "#fff"} />
  </Helmet>
)
