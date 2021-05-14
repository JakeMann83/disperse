import React from "react"
import { Link, graphql } from 'gatsby'
import "../../src/components/layout.css"
import blogStyles from './blog.module.css' 
import Head from '../components/head'
import Layout from "../components/layout"
import SEO from "../components/seo"

const LinesandCallsPage = ({ data }) => {
  return(
  <Layout>
    <SEO title="Lines and Calls" />
    <h1 className="portfolio">LINES & CALLS</h1>
    <div className="container pt30 pb30">
        <Head title="Blog" />  
        <div>
          <h1>{data.contentfulMain.pageHeader}</h1>
          <h3>{data.contentfulMain.pageSubheader.pageSubheader}</h3>
          <p>{data.contentfulMain.pageBody.pageBody}</p>
        </div> 
        <ol className={blogStyles.posts}>
          {data.allContentfulMenuArticleB.edges.map((edge) => {
            return  (
              <li key={edge.node.id} className={blogStyles.post}>
                <Link to={`/${edge.node.slug}`}>
                <div className="row">
                    <h2>{edge.node.title}</h2>
                  </div>
                  <div className="row">
                    <div className="col-lg-8">
                      <p>{edge.node.body.body}</p>
                    </div>
                    <div className="col-lg-4">  
                      <img   
                          src={edge.node.lcImage.fluid.src} 
                          alt={edge.node.title}
                      /> 
                    </div>  
                  </div>    
                </Link>
              </li>
            )    
          })} 
        </ol>
      </div>  
  </Layout>
  );
}

export const query = graphql`
    query {
      contentfulMain(pageHeader: {eq: "Lines & Calls"}) {
        pageHeader
        pageSubheader {
          pageSubheader
        }
        pageBody {
          pageBody
        }
      }
      allContentfulMenuArticleB {
        edges {
          node {
            id
            title
            slug
            body {
              body
            }
            lcImage {
              fluid(maxWidth: 300) {
                  src
              }
          }
          }
        }
      }
    }
  `;  

export default LinesandCallsPage
