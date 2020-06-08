import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/ui/title"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div className="text-big">
        <Title>Hello there!</Title>
        <p>I'm Jose Salguero, a spanish developer living in Berlin.</p>

        <p>
          I specialized in web application development with focus in Java and
          Javascript. Eager to learn and apply new cutting edge technologies and
          methodologies. Well organized, proactive, problem solving oriented and
          able to work under pressure. I enjoy working international
          environments and providing a good team spirit. Particularly interested
          in high availability web development, user interfaces, high
          performance applications and mobile applications
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
