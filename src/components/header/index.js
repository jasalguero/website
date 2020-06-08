import React from "react"
import { Link } from "gatsby"
import "./style.css"

class Header extends React.Component {
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link className="logo-link" to={`/`}>
            <div className="logo">
              <div className="left">JOSE</div>
              <div className="right">SALGUERO</div>
            </div>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow justify-end">
            <Link
              className="li-link block mt-4 lg:inline-block lg:mt-0 mr-4"
              to="/"
              activeClassName="active"
              partiallyActive={true}
            >
              About
            </Link>
            <Link
              className="li-link block mt-4 lg:inline-block lg:mt-0 mr-4"
              to="/contact/"
              activeClassName="active"
              partiallyActive={true}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    )
    // return (
    //   <div className="header-main">
    //     <Link className="logo-link" to={`/`}>
    //       <div className="logo">
    //         <div className="left">JOSE</div>
    //         <div className="right">SALGUERO</div>
    //       </div>
    //     </Link>
    //     <div className="header-nav">
    //       <ul className="nav-ul">
    //         <li className="nav-li">
    //           <h1 className="li-h1">
    //             <Link className="li-link" to={`/`} activeClassName="active">
    //               About
    //             </Link>
    //           </h1>
    //         </li>
    //         <li className="nav-li">
    //           <h1 className="li-h1">
    //             <Link
    //               className="li-link"
    //               to={`/contact`}
    //               activeClassName="active"
    //             >
    //               Contact
    //             </Link>
    //           </h1>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // )
  }
}

export default Header
