import React, { useState } from "react"
import { Link } from "gatsby"
import "./style.css"
import "./hamburger.css"

const NAV_ITEMS = [
  { id: "about", label: "About", url: "/" },
  { id: "contact", label: "Contact", url: "/contact" },
]

const Header = () => {
  const [isOpen, setOpen] = useState(false)

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
      <MobileNavButton isOpen={isOpen} setOpen={setOpen} />
      <DesktopNav />
      <MobileNav isOpen={isOpen} />
    </nav>
  )
}

export default Header

function DesktopNav() {
  return (
    <div className="desktop-nav hidden md:flex md:items-center md:w-auto">
      <div className="text-sm md:flex-grow justify-end">
        {NAV_ITEMS.map(item => (
          <Link
            className="li-link block mt-4 md:inline-block md:mt-0 mr-4"
            to={item.url}
            key={`${item.id}-nav`}
            activeClassName="active"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

function MobileNavButton({ isOpen, setOpen }) {
  return (
    <div className="block md:hidden">
      {isOpen}
      <button
        type="button"
        className={`hamburger pr-5 focus:outline-none ${
          isOpen ? "open" : ""
        }`}
        onClick={() => setOpen(!isOpen)}
      >
        <span className="hamburger__top-bun"></span>
        <span className="hamburger__bottom-bun"></span>
      </button>
    </div>
  )
}

function MobileNav({ isOpen }) {
  const visibilityClass = isOpen ? "block" : "hidden"
  return (
    <div className={`mobile-nav w-full md:hidden ${visibilityClass}`}>
      {NAV_ITEMS.map(item => (
        <Link
          className="block mt-4 mr-4"
          to={item.url}
          key={`${item.id}-nav`}
          activeClassName="active"
        >
          {item.label.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}
