import React from "react"

import Image1 from './image-1'
import Image2 from './image-2'
import Image3 from './image-3'


const ImageBar = () => (
  <section className="bg-gray-100" style={{ height: "400px"}}>
    <div className="w-4/5 md:w-2/3 mx-auto flex flex-wrap md:justify-between pt-6 md:pt-16">
      <div className="w-full flex justify-between">
        <div className="rounded-xl">
          <Image1 style={{ height: "200px", width: "300px"}}/>
        </div>
        <Image2 className="rounded-xl" style={{ height: "200px", width: "300px"}}/>
        <Image3 className="rounded-xl" style={{ height: "200px", width: "300px"}}/>
      </div>
    </div>
  </section>
)

export default ImageBar
