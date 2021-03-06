import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.css' 
import Head from '../../components/head'

const MenuArticleE = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulMain(pageHeader: {eq: "Business Services"}) {
        pageHeader
        pageSubheader {
          pageSubheader
        }
        pageBody {
          pageBody
        }
      }
      allContentfulMenuArticleE {
        edges {
          node {
            id
            title
            slug
            body {
              body
            }
            bsImage {
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
          {data.allContentfulMenuArticleE.edges.map((edge) => {
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
                          src={edge.node.bsImage.fluid.src} 
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

export default MenuArticleE