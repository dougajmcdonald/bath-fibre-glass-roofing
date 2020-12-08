import React from "react"

const Button = ({ to, children, className }) => (
  <a href={to} className={className}>
    <button
      className="bg-primary rounded-full text-gray-800 font-bold font-body text-center px-4 py-2"
      style={{ minWidth: `200px` }}
    >
      {children}
    </button>
  </a>
)

export default Button
