import React from "react"
import { graphql } from "gatsby"
import { navigate } from "gatsby-link"
import "./style.css"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Title from "../../components/ui/title"
import { encode, validateEmail } from "../../utils/functions"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  const isDisabled = () => {
    return (
      !state.name ||
      state.name === "" ||
      !state.email ||
      !validateEmail(state.email) ||
      !state.message ||
      state.message === ""
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <div>
        <Title size="sm">Contact</Title>
        <h2>Drop me a line if you want to get in contact</h2>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input
            type="hidden"
            name="form-name"
            value="contact"
            aria-label="Form Name"
          />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input
                id="name"
                name="bot-field"
                aria-label="Bot Field"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your name:
              <br />
              <input
                type="text"
                name="name"
                aria-label="Your name"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <br />
              <input
                type="email"
                name="email"
                aria-label="Your email"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea
                name="message"
                aria-label="Message"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <button
              type="submit"
              aria-label="Submit Form"
              disabled={isDisabled()}
            >
              SEND
            </button>
          </p>
        </form>
      </div>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
