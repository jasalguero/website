import React from "react"
import Header from "./header"
import "./base.css"

function Layout({ location, title, children }) {
  return (
    <div className="layout-wrapper">
      <header>
        <Header location={location} />
      </header>
      <div className="content-wrapper">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
