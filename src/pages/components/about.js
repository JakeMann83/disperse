import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/MainElements.css'
import Testimonials from '../../components/Testimonials'
import { Link, graphql, useStaticQuery } from 'gatsby'



const About = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulAboutPage {
                aboutTop {
                    aboutTop  
                }
                aboutBody {
                    aboutBody
                }
                aboutImage {
                    resize(height: 1030) {
                      src
                    }
                }
            }  
            allContentfulAboutSlider(limit: 3) {
                edges {
                  node {
                    aboutImage {
                        resize(width: 50, height: 50) {
                          src
                        }
                    } 
                    title
                    body {
                      body
                    }
                  }
                }
            }
        }
    `)
  
  return (
        <>
        <div class='container-fluid no-padding mb40'>
            <div class="row special-feature">         
                {data.allContentfulAboutSlider.edges.map((edge) => {
                    return  (
                        <div class="col-md-4 col-sm-6 margin20">
                            <div class="s-feature-box text-center">
                                <div class="mask-top">
                                    <i></i>
                                    <h4>{edge.node.title}</h4>
                                </div>
                                <div class="mask-bottom">
                                    <img src={edge.node.aboutImage.resize.src} alt={edge.node.title} />
                                    <h4>{edge.node.title}</h4>
                                    <p>{edge.node.body.body}</p>
                                    <Link to="/" class="btn btn-lg btn-link btn-base">Read more ›</Link> 
                                </div>  
                            </div>
                        </div>
                    )    
                })} 
            </div>

            {/* 
                
                    
                  
                </div>
            </div> */}
         
 
            <div class='row pt40 no-margin'>
                <div class='col-lg-8  mr-auto ml-auto'>
                    <p class='title-heading1 mb50 text-center'>
                    <h2>{data.contentfulAboutPage.aboutTop.aboutTop}</h2>
                    </p>
                </div>
            </div>

            <div class='container-fluid col-lg-8 no-padding mb40'>
                <div class='row no-margin'>
                    <div class='col-lg-4  mr-auto ml-auto'>
                        <div class="title-heading1 mb30">
                            <h3>Why Choose Us</h3>
                        </div>
                        <p class='lead mb50 text-center'>
                            <p>{data.contentfulAboutPage.aboutBody.aboutBody}</p>
                        </p>
                    </div>
                    <div class='col-lg-4  mr-auto ml-auto'>
                        <p class='lead mb50 text-center'>
                            <img 
                                src={data.contentfulAboutPage.aboutImage.resize.src} 
                                alt={data.contentfulAboutPage.title}
                            />
                        </p>
                    </div>
                </div>
            </div>   
            
        </div>    
        <div class="pt0 pb0">
            <Testimonials />         
        </div>     
    </>    
    )  
}

export default About