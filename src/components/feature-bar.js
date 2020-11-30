import React from "react"

import Annotation from "../svg/annotation.svg"
import ClipboardList from "../svg/clipboard-list.svg"

const FeatureBar = () => (
  <section className="bg-gray-100" style={{ height: "400px"}}>
    <div className="w-4/5 md:w-2/3 mx-auto flex flex-row flex-wrap md:justify-between pt-6 md:pt-16">
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <ClipboardList className="m-4"/>
        <p className="text-l">All work is fully gauranteed</p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <Annotation className="m-4" />
        <p className="text-l">We take pride in the quality of our work</p>
      </div>
    </div>
  </section>
)

export default FeatureBar
