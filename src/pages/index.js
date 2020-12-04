import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import ImageBar from "../components/image-bar"
import FeatureBar from "../components/feature-bar"

const IndexPage = () => (
  <Layout>
    <SEO title="Index" />
    <Hero />
    <ImageBar />
    <Body>
      <h2 className="text-center font-bold">Why fibre glass?</h2>
      <span className="border-primary border-b-4 w-32 inline-block mx-auto mb-8"></span>
      <p className="text-l text-center">
        We feel fibre glass roofing systems are still the best product to choose with a proven history of durability and made to last.
      </p>
      <p className="text-l text-center">
        Being tough and hard wearing, easily repaired if damaged, can be extened and well exceeds its gaurantee.
      </p>
    </Body>
    <FeatureBar />
  </Layout>
)

export default IndexPage
