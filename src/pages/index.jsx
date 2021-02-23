import React from "react"
import styled from "styled-components"

const Container = styled.main`
  color: #222;
  display: flex;
  padding: 2em;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, 
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`

const Message = styled.p`
  margin: 0.5em 0;
  line-height: 1.5;
`

const Links = styled.div`
  margin: 3em 0 0 0;
  display: flex;
  flex-direction: row;
`

const Link = styled.a`
  color: inherit;
  margin: 0 1em 0 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const IndexPage = () => (
    <Container>
      <Message>
        Lucas Yunkyu Lee is studying and researching computer science at POSTECH, Korea.
      </Message>
      <Message>
        He is interested in computational physics and web development,
          with proficiency in Python, JavaScript, Go, and more.
      </Message>
      <Links>
        <Link href="https://github.com/rocketll">GitHub↗</Link>
        <Link href="mailto:me@luc.li">Mail↗</Link>
      </Links>
    </Container>
  )

export default IndexPage