import React from "react"

import Image4 from "./image-4"
import Image5 from "./image-5"

const ImageBar2 = () => (
  <section className="bg-white">
    <div className="w-4/5 md:w-2/3 mx-auto flex flex-wrap md:justify-between py-6 md:py-16">
      <div className="w-full flex flex-col md:flex-row justify-evenly">
        <div
          className="overflow-hidden rounded-3xl my-2"
          style={{ height: "200px", width: "300px" }}
        >
          <Image4 style={{ height: "200px", width: "300px" }} />
        </div>
        <div
          className="overflow-hidden rounded-3xl my-2"
          style={{ height: "200px", width: "300px" }}
        >
          <Image5 style={{ height: "200px", width: "300px" }} />
        </div>
      </div>
    </div>
  </section>
)

export default ImageBar2
