import React from "react"
import "../../src/components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "./components/portfolio"


const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1 className="portfolio">NEWS</h1>
    <Portfolio />
  </Layout>
)

export default PortfolioPage
