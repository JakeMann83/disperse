
import React from "react"
import PropTypes from "prop-types"
import Footer from "./Footer"
import useScript from '../hooks/useScript'


import Navbar from "./Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  
  useScript('/assets/jquery-2.2.3.min.js');
  useScript('/assets/plugins.js');
  useScript('/assets/bootstrap.min.js');
  useScript('/assets/custom.min.js');
 

  
  
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}



export default Layout
