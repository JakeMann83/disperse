import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.css' 
import Head from '../../components/head'

const MenuArticleD = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulMain(pageHeader: {eq: "Connectivity"}) {
        pageHeader
        pageSubheader {
          pageSubheader
        }
        pageBody {
          pageBody
        }
      }
      allContentfulMenuArticleD {
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
          <h1>{data.contentfulMain.pageHeader}</h1>
          <h3>{data.contentfulMain.pageSubheader.pageSubheader}</h3>
          <p>{data.contentfulMain.pageBody.pageBody}</p>
        </div> 
        <ol className={blogStyles.posts}>
          {data.allContentfulMenuArticleD.edges.map((edge) => {
            return  (
              <li className={blogStyles.post}>
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

export default MenuArticleD