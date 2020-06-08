import React from "react"

export default function Title({ size = "md", children }) {
  let styles = {
    sm:
      "text-3xl font-semibold leading-tight text-gray-800 md:text-4xl lg:text-5xl lg:font-medium xl:text-6xl",
    md:
      "text-5xl font-semibold leading-tight text-gray-800 md:text-6xl lg:text-7xl lg:font-medium xl:text-8xl",
  }
  return <h1 className={styles[size]}>{children}</h1>
}
