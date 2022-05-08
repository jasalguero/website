import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/ui/title"
import CV from "../../static/cv.pdf"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div className="text-big">
        <Title>
          Hi I'm <strong>Jose</strong>!
        </Title>
        <p>
          I am a software engineer and I build tools to (hopefully) help people
          improve their lives
        </p>
        <p>
          I enjoy learning, sharing, travelling and discovering places and
          connecting with people; I'm usually located in Berlin but very often
          on the move
        </p>
        <p>
          If you want to work with me, check out my <a href={CV}>CV</a> and{" "}
          <a href="https://www.linkedin.com/in/jasalguero/">profile</a> and you
          can contact me <Link to="/contact">here</Link> or at{" "}
          <a href="mailto:contact@jasalguero.com">contact@jasalguero.com</a>
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
