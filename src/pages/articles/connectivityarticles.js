import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.css' 
import Head from '../../components/head'

const Conarticles = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPageHeaders(title: {eq: "Connectivity"}) {
        title
        subtitle {
          subtitle
        }
        body {
          body
        }
      }
      allContentfulConArticle {
        edges {
          node {
            title
            slug
            body {
              body
            }
            conImage {
              fluid(maxWidth: 300) {
                  src
              }
          }
          }
        }
      }
    }
  `)

  return (
      <div className="container pt30 pb30">
        <Head title="Blog" /> 
        <div>
          <h1>{data.contentfulPageHeaders.title}</h1>
          <h3>{data.contentfulPageHeaders.subtitle.subtitle}</h3>
          <p>{data.contentfulPageHeaders.body.body}</p>
        </div> 
        <ol className={blogStyles.posts}>
          {data.allContentfulConArticle.edges.map((edge) => {
            return  (
              <li className={blogStyles.post}>
                <Link to={`/news/${edge.node.slug}`}>
                  <div className="row">
                    <h2>{edge.node.title}</h2>
                  </div>
                  <div className="row">
                    <div className="col-lg-8">
                      <p>{edge.node.body.body}</p>
                    </div>
                    <div className="col-lg-4">  
                      <img   
                          src={edge.node.conImage.fluid.src} 
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
  )
}

export default Conarticles