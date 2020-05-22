import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThanksPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Thanks" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h1>Thank you!</h1>
        <p>I'll try to get back to you as soon as possible :)</p>
      </div>
    </Layout>
  )
}

export default ThanksPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
