import React from "react"
import { Link } from "gatsby"
import "./style.css"

class Header extends React.Component {
  render() {
    return (
      <div className="header-main">
        <Link className="logo-link" to={`/`}>
          <div className="logo">
            <div className="left">JOSE</div>
            <div className="right">SALGUERO</div>
          </div>
        </Link>
        <div className="header-nav">
          <ul className="nav-ul">
            <li className="nav-li">
              <h1 className="li-h1">
                <Link className="li-link" to={`/`} activeClassName="active">
                  About
                </Link>
              </h1>
            </li>
            <li className="nav-li">
              <h1 className="li-h1">
                <Link
                  className="li-link"
                  to={`/contact`}
                  activeClassName="active"
                >
                  Contact
                </Link>
              </h1>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
