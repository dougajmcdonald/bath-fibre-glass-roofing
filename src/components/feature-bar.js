import React from "react"

import Annotation from "../svg/annotation.svg"
import ClipboardList from "../svg/clipboard-list.svg"

const FeatureBar = () => (
  <section className="bg-gray-100 flex items-center py-6 md:py-16">
    <div className="w-4/5 md:w-2/3 mx-auto flex flex-row flex-wrap md:justify-between items-center">
      <div className="w-full md:w-1/2 flex flex-col items-center md:pl-4">
        <Annotation className="m-4" />
        <p className="text-base md:text-l text-center">We take pride in the quality of our work</p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:pr-4">
        <ClipboardList className="m-4"/>
        <p className="text-base md:text-l text-center">All work is fully guaranteed for your peace of mind</p>
      </div>
    </div>
  </section>
)

export default FeatureBar
