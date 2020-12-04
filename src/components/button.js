import React from "react"
import { Link } from "gatsby"

const Button = ({ to, children }) => (
  <Link to={to}>
    <button
      className="bg-primary rounded-full text-gray-800 font-bold font-body text-center px-4"
      style={{ minWidth: `200px`, height: `48px` }}
    >
      {children}
    </button>
  </Link>
)

export default Button
