import React from "react"

import Button from "../components/button"

const Header = () => {
  return (
    <header
      className="font-display flex bg-gray-800 fixed left-0 right-0 z-10"
      style={{ minHeight: `70px` }}
    >
      <div className="w-4/5 md:w-2/3 mx-auto py-4 flex flex-wrap items-center justify-between">
        <h1 className="text-l text-gray-100 my-0">Bath Fibre Glass Roofing</h1>
        <nav className="md:block">
          <Button to={"/"}>Call us now 07966 232134</Button>
        </nav>
      </div>
    </header>
  )
}

export default Header
