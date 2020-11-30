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
      <h1 className="text-center border-primary border-b-4 text-3xl font-bold">Why fibre glass?</h1>
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
