import React from "react"
import { Link } from "gatsby"

const Button = ({ to, children, className }) => (
  <Link to={to} className={className}>
    <button
      className="bg-primary rounded-full text-gray-800 font-bold font-body text-center px-4 py-2"
      style={{ minWidth: `200px` }}
    >
      {children}
    </button>
  </Link>
)

export default Button
