import React from "react"

import Checkmark from '../svg/checkmark-outline.svg'
import Button from "../components/button"

const Hero = () => (
  <section className="bg-white pt-16">
    <div className="w-4/5 md:w-2/3 mx-auto flex flex-wrap md:justify-between pt-16 pb-8 md:py-16">
      <div className="w-full md:w-2/3 md:pr-10">
        <h2 className="text-gray-800 font-bold text-xl md:text-3xl md:mr-20 font-body mt-0 border-primary border-b-4 w-32">
          Welcome
        </h2>
        <p className="text-l md:text-xl">We have been working with fibre glass roofing systems since 1995 and carry out all types of roofing.</p>
        <Button to={"/"} className="md:block hidden">Call us now 07966 232134</Button>
      </div>
      <div className="w-full md:w-1/3 md:pt-10">
        <ul className="md:text-l text-base md:ml-4 md:mt-8">
          <li className="md:mt-4 mt-2 md:pl-4"><Checkmark className="w-4 h-4 inline-block mr-4" />Tiled roofs</li>
          <li className="md:mt-4 mt-2 md:pl-4"><Checkmark className="w-4 h-4 inline-block mr-4" />Slate roofs</li>
          <li className="md:mt-4 mt-2 md:pl-4"><Checkmark className="w-4 h-4 inline-block mr-4" />Guttering</li>
          <li className="md:mt-4 mt-2 md:pl-4"><Checkmark className="w-4 h-4 inline-block mr-4" />Lead work</li>
        </ul>
      </div>
    </div>
  </section>
)

export default Hero
