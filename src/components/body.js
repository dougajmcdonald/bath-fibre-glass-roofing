import PropTypes from "prop-types"
import React from "react"

const Body = ({ children }) => (
  <main className="w-4/5 md:w-1/2 mx-auto py-6 md:py-16">{children}</main>
)

Body.propTypes = {
  children: PropTypes.node.isRequired
}

export default Body
