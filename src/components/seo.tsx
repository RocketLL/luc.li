import React, { FunctionComponent } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet"

import stripTrailingSlash from "../utils/strip-trailing-slash"

interface SEOProps {
  title?: string
  description?: string
  image?: string
  article?: boolean
  date?: string
  tags?: string[]
}

interface SEOQueryData {
  site: {
    siteMetadata: {
      defaultTitle: string
      titleTemplate: string
      defaultDescription: string
      siteUrl: string
      defaultImage: string
      firstName: string
      lastName: string
      username: string
      gender: string
    }
  }
}

const SEO: FunctionComponent<SEOProps> = ({
  title,
  description,
  image,
  article: isArticle,
  date,
  tags,
}) => {
  const { pathname } = useLocation()
  const data: SEOQueryData = useStaticQuery(
    graphql`
      query SEOQuery {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl
            defaultImage: image
            firstName
            lastName
            username
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    firstName,
    lastName,
    username,
    gender,
  } = data.site.siteMetadata

  const metadata = {
    lang: "en",
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${stripTrailingSlash(siteUrl)}${image || defaultImage}`,
    url: stripTrailingSlash(`${siteUrl}${pathname}`),
  }

  const isProfile = pathname === "/"
  const type = isArticle ? "article" : isProfile ? "profile" : "website"

  return (
    <Helmet
      title={defaultTitle}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: metadata.lang,
      }}
    >
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="image" content={metadata.image} />
      <link rel="canonical" href={metadata.url} />

      <meta property="og:type" content={type} />
      {isArticle && <meta property="article:published_time" content={date} />}
      {isArticle &&
        tags &&
        tags.map(tag => <meta property="article:tag" content={tag} />)}
      {isArticle && (
        <meta property="article:author" content={stripTrailingSlash(siteUrl)} />
      )}
      {isProfile && <meta property="profile:first_name" content={firstName} />}
      {isProfile && <meta property="profile:last_name" content={lastName} />}
      {isProfile && <meta property="profile:username" content={username} />}
      {isProfile && <meta property="profile:gender" content={gender} />}
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />
    </Helmet>
  )
}

export default SEO
