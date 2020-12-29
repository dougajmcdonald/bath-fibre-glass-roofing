import React from "react"

import Button from "../components/button"

const Header = () => {
  return (
    <header
      className="font-display flex bg-gray-800 fixed left-0 right-0 z-10"
      style={{ minHeight: `70px` }}
    >
      <div className="w-4/5 md:w-2/3 mx-auto py-4 flex flex-wrap items-center md:justify-between justify-center">
        <h1 className="text-l text-center text-gray-100 md:my-0 my-2">
          Bath Fibreglass Roofing
        </h1>
        <nav className="md:block">
          <Button to={"tel:07966232134"}>Call us now 07966 232134</Button>
        </nav>
      </div>
    </header>
  )
}

export default Header
