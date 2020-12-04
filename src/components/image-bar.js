import React from "react"

import Image1 from './image-1'
import Image2 from './image-2'
import Image3 from './image-3'


const ImageBar = () => (
  <section className="bg-gray-100">
    <div className="w-4/5 md:w-2/3 mx-auto flex flex-wrap md:justify-between py-6 md:py-16">
      <div className="w-full flex justify-between">
        <div className="overflow-hidden rounded-3xl mr-2" style={{ height: "200px", width: "300px"}}>
          <Image1 style={{ height: "200px", width: "300px"}}/>
        </div>
        <div className="overflow-hidden rounded-3xl mr-2" style={{ height: "200px", width: "300px"}}>
          <Image2 style={{ height: "200px", width: "300px"}}/>
        </div>
        <div className="overflow-hidden rounded-3xl" style={{ height: "200px", width: "300px"}}>
          <Image3 style={{ height: "200px", width: "300px"}}/>
        </div> 
      </div>
    </div>
  </section>
)

export default ImageBar
