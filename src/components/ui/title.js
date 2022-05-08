import React from "react"

export default function Title({ size = "md", children }) {
  let styles = {
    sm:
      "pb-4 text-2xl font-semibold leading-tight text-gray-800 md:text-3xl lg:text-4xl lg:font-medium xl:text-5xl",
    md:
      "pb-4 text-4xl font-semibold leading-tight text-gray-800 md:text-4xl lg:text-5xl lg:font-medium xl:text-6xl",
  }
  return <h1 className={styles[size]}>{children}</h1>
}
