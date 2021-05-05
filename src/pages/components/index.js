import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import '../components/template.css'
import { Link, graphql, useStaticQuery } from 'gatsby'


const Main = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulMain(sort: {fields: servicesOrder, order: ASC}, limit: 4) {
            edges {
              node {
                pageTitle
                pageSubheader {
                  pageSubheader
                }
                servicesImage {
                  resize(height: 200) {
                    src
                  }
                }
              }
            }
          }
          contentfulMain(pageTitle: {eq: "TELEPHONE SYSTEMS"}) {
            servicesImage {
              resize {
                src
              }
            }
            pageTitle
            pageBody {
              pageBody
            }
          }  
        allContentfulBlogPost ( sort: { fields: publishedDate, order:DESC }, limit: 3 ) {
            edges {
                node {
                    title
                    slug
                    publishedDate(formatString:"MMMM Do, YYYY")
                    body {
                        body
                    }
                    media {
                        resize(width: 680, height: 489) {
                          src
                        }
                    }
                }
            }
        }
        contentfulMenuArticleA {
            tsImage {
                resize {
                    src
                }
            }

            title
            body {
              body
            }
        }
        contentfulHeader {
            header
            subheader
        }
        contentfulHeader {
            header
            subheader
        }
      }
  `)
  
return (
    <>
        <div class='container pt90 pb60'>
                <div class='row'>
                    <div class='col-md-5 mb30'>
                    
                            <img className="mb30" src={data.contentfulMain.servicesImage.resize.src} alt={data.contentfulMain.pageTitle} />
                            <h5 class='text-uppercase mb20'>{data.contentfulMain.pageTitle}</h5>
                            <p>{data.contentfulMain.pageBody.pageBody}</p>
                        
                    </div>    
                    <div class='col-md-7 ml-auto'>
                        <div class='row'>
                            {data.allContentfulMain.edges.map((edge) => {
                                return  (
                                        <div class='col-md-6 mb30 text-center'>
                                            <img className="mb30" src={edge.node.servicesImage.resize.src} alt={edge.node.pageTitle} />
                                            <h5 className='text-uppercase mb20'>{edge.node.pageTitle}</h5>
                                            <p>{edge.node.pageSubheader.pageSubheader}</p>
                                        </div>      
                                )    
                            })} 
                        </div>      
                    </div>
                </div>
            </div>
            <div class="container">

<div class="row">
    <div class="col-sm-12 col-sm-offset-3">
        <div class="module-header text-center">
            <h2 class="montserrat text-uppercase">{data.contentfulHeader.header}</h2>
            <p class="lead divider-line">{data.contentfulHeader.subheader}</p>
        </div>
    </div>
</div>

<div class="row multi-columns-row post-columns">         
{data.allContentfulBlogPost.edges.map((edge) => {
    return  (
    <div class="col-sm col-md-4 col-lg-4">
        <article class="post format-image bg-white">
            <div class="post-preview">
                <img src={edge.node.media.resize.src} alt={edge.node.title} />
            </div>
            <div class="post-content">
                <Link to={`/news/${edge.node.slug}`}>
                <h2 class="post-title">{edge.node.title}</h2>
                <ul class="post-meta">
                    <li>{edge.node.publishedDate}</li>
                </ul> 
                <p>{edge.node.body.body}</p>  
                <Link to="/" class="btn btn-lg btn-link btn-base">Read more ›</Link> 
                </Link>
            </div>
        </article>
    </div>
    )    
})} 

</div>

<div class="row">
    <div class="col-sm-12">
        <div class="text-center m-t-35 m-b-35">
            <Link to="/">Read all news</Link>
        </div>
    </div>
</div>

</div>
    </>
    )  
}

export default Main