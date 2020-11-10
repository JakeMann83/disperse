import React from "react"
import "../../src/components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "./components/services"


const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1 className="services">SERVICES</h1>
    <Services />
  </Layout>
)

export default ServicesPage
