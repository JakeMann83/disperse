import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulMarticle(slug: {eq: $slug}) {
            title
            body {
                body
            }
            mobImage {
                fluid(maxWidth: 500) {
                    src
                }
            }
        }
    }
`

const BlogTemplate = (props) => {
  
    return (
        <Layout>
            <Head title="{props.data.contentfulMarticle.title}" />
            <div className="container pt100">
                <div>
                <h1 className="news">{props.data.contentfulMarticle.title}</h1> 
                    <img 
                        src={props.data.contentfulMarticle.mobImage.fluid.src} 
                        alt={props.data.contentfulMarticle.title}
                    />    
                    <p>{props.data.contentfulMarticle.body.body}</p> 
                </div>    
            </div>      
        </Layout>
    )
}

export default BlogTemplate