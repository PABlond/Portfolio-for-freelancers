import React from "react"
import { Helmet } from "react-helmet"
import { IHeadProps } from "./../../interfaces/query.interface"

export default ({
  data: { siteUrl, defaultDescription, defaultTitle, themeColor, pageName },
}: {
  data: IHeadProps
}) => (
  <Helmet htmlAttributes={{ lang: "en" }}>
    <meta charSet="utf-8" />
    <title>{pageName || defaultTitle}</title>
    <link rel="canonical" href={siteUrl} />
    <meta name="description" content={defaultDescription} />
    <meta name="theme-color" content={themeColor || "#fff"} />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Prata:300&display=swap" rel="stylesheet">
</link>
  </Helmet>
)
