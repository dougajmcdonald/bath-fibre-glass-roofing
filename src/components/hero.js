import React from "react"

import Button from "../components/button"

const Hero = () => (
  <section className="bg-white" style={{ minHeight: `400px` }}>
    <div className="w-4/5 md:w-2/3 mx-auto flex flex-wrap md:justify-between pt-6 md:pt-16">
      <div className="w-full md:w-2/3">
        <h2 className="text-gray-800 font-bold text-xl md:text-3xl md:mr-20 font-body mt-0 border-primary border-b-4 w-32">
          Welcome
        </h2>
        <p className="text-xl">We have been working with fibre glass roofing systems since 1995 and carry out all types of roofing.</p>
        {<Button to={"/"}>Call us now 07966 232134</Button>}
      </div>
      <div className="w-full md:w-1/3">
        <ul>
          <li>Tiled roofs</li>
          <li>Slate roofs</li>
          <li>Guttering</li>
          <li>Lead work</li>
        </ul>
      </div>
    </div>
  </section>
)

export default Hero
