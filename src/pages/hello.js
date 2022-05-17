import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Hello = ({ data: { microcmsHello } }) => (
  <Layout>
    <SEO title="Hello, microCMS!!" />
    <h1>{microcmsHello.text}</h1>
  </Layout>
)

export default Hello

export const query = graphql`
  query {
    microcmsHello {
      text
    }
  }
`
