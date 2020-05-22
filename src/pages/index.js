import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>Hello there.</h2>
        <p>
          My name is Jose Salguero, born in Sevilla (Spain), currently
          working and living in Berlin.
        </p>

        <p>
          I am a software engineer specialized in web application development
          focused in Java and Javascript. Eager to learn and apply new cutting
          edge technologies and methodologies. Well organized, proactive,
          problem solving oriented and able to work under pressure. I enjoy
          working international environments and providing a good team spirit.
          Particularly interested in high availability web development, user
          interfaces, high performance applications and mobile applications
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
