import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import ImageBar from "../components/image-bar"
import ImageBar2 from "../components/image-bar-2"
import FeatureBar from "../components/feature-bar"

const IndexPage = () => (
  <Layout>
    <SEO title="Index" />
    <Hero />
    <ImageBar />
    <Body>
      <h2 className="text-center font-bold">Why fibreglass?</h2>
      <span className="border-primary border-b-4 w-32 inline-block mx-auto mb-8"></span>
      <p className="text-l text-center">
        We feel fibreglass roofing systems are still the best product to choose
        with a proven history of durability and made to last.
      </p>
      <p className="text-l text-center">
        Being tough and hard wearing, easily repaired if damaged, can be
        extended and well exceeds its guarantee.
      </p>
    </Body>
    <FeatureBar />
    <ImageBar2 />
  </Layout>
)

export default IndexPage
