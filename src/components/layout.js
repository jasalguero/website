import React from "react"
import { rhythm } from "../utils/typography"
import Header from "./Header"
import "./base.css"

function Layout({ location, title, children }) {
  
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1)} ${rhythm(2 / 4)} 0 ${rhythm(2 / 4)} `,
        // fontFamily: `Montserrat`,
      }}
    >
      <header>
        {" "}
        <Header location={location} />{" "}
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
