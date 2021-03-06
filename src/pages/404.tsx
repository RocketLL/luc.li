import React, { FunctionComponent } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"

const ErrorPage: FunctionComponent = () => {
  return (
    <ErrorContainer>
      <SEO title="HTTP 404" description="HTTP 404 not found" />
      <ErrorTitle>HTTP 404.</ErrorTitle>
      <ErrorText>The page you tried to access doesn't exist.</ErrorText>
      <HomeLink to="/">Return home</HomeLink>
    </ErrorContainer>
  )
}

const ErrorContainer = styled.div`
  margin: 10rem 0;
`

const ErrorTitle = styled.h1`
  margin: 10rem 0 1rem 0;
  font-size: 3em;
`

const ErrorText = styled.p`
  margin: 0 0 3rem 0;
  color: ${({ theme }) => theme.foreground.sub};
  font-size: 1.1em;
`

const HomeLink = styled(Link)`
  margin: 0 -0.6em;
  padding: 0.6em 0.7em;
  color: inherit;
  font-size: 1.1em;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.foreground.link};
  text-decoration-thickness: 1px;
  background: none;
  border: none;
  border-radius: 0.6rem;
  outline: inherit;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.background.sub};
  }
`

export default ErrorPage
