
import React from 'react'
import Layout from '../components/Layout'
import '../styles/global.css'
import { graphql, Link } from 'gatsby'
import * as styles from '../styles/landing.module.css'
import { StaticImage } from 'gatsby-plugin-image'

export default function index({ data }) {
  console.log(data)
  const sitedata = data.allMarkdownRemark.nodes
  console.log(sitedata[1].frontmatter.subtitle)
  return (
    <Layout>
    
    {/* This is the container which contains the landing page info and svg image in a flexbox format */}
    <div className={styles.main}>

    {/* Left Info */}
      <div className={styles.leftInfo}>
        <div className={styles.leftInfoData}>
        <div className={styles.title}>{sitedata[1].frontmatter.title}</div>
        <div className={styles.subtitle}>{sitedata[1].frontmatter.subtitle}</div>
        <div className={styles.para}>{sitedata[1].frontmatter.paragraph}</div>
        <div className={styles.help}>  
        <Link to="/Help" style={{color:'white'}}>Let Us Help</Link>
        </div>
        </div>
      </div>

    {/* Right Info */}

      <div className={styles.pic}>
        <div className={styles.picdata}>
          <StaticImage 
          src="../images/corona_virus_side.svg"
          quality="100"
          alt="corona_virus"
          />
      </div>
      <div className={styles.picdata2}>
          <StaticImage 
          src="../images/girl_sofa.svg"
          quality="100"
          alt="girl sofa"
          />
      </div>
      <div className={styles.picdata3}>
      <StaticImage 
          src="../images/corona_half.svg"
          quality="100"
          alt="corona_virus_cropped"
          />
        </div>
          
      </div>
      

    </div>


    {/* This is the 2nd container which contains the corona information in a flexbox format */}

    <div className={styles.secondMain}>

      {/* left column containing image */}

      <div className={styles.leftImage}>

        <div className={styles.leftImage1}>
        <StaticImage 
        src="../images/corona_bubble.svg"
        alt="corona_bubble"
        />
        </div>
        <div className={styles.leftImage2}>
        <StaticImage 
        src="../images/corona_color.svg"
        alt="corona_color"
        />
        </div>
        
      </div>

      {/* Right column */}

      <div className={styles.coronaInfo}>
        <div className={styles.coronaInfoData}>
            <div className={styles.titles}>{sitedata[2].frontmatter.title}</div>
            <div className={styles.subtitle}>{sitedata[2].frontmatter.subtitle}</div>
            <div className={styles.paras}>{sitedata[2].frontmatter.paragraph}</div>
            <div className={styles.learnMore}>
           <Link to='/learnmore' style={{color: 'rgba(250,86,82,1)'}}> Learn More</Link>
           </div>
        </div>
        
      </div>

      <div className={styles.coronaLight}>
      <StaticImage 
          src="../images/corona_light_half.svg"
          alt="Corona Light"
          />

      </div>

         
      </div>

    {/* This is the 3rd container which contains the contagion information in a flexbox format */}

     <div className={styles.contaParent}>

        <div className={styles.titles} style={{marginBottom:'2em'}}>{sitedata[0].frontmatter.title}</div>
        <div  className={styles.subtitle} >{sitedata[0].frontmatter.subtitle}</div>
        <div className={styles.paras} style={{marginBottom:'3em',marginLeft:'2em'}}>{sitedata[0].frontmatter.paragraph}</div>

        <div className={styles.contaCards}>
          <div className={styles.contaCards1} style={{ borderBottom: '6px solid #FA5652'}}>
            <div>
            <StaticImage 
            src="../images/girl_card.svg"
            className={styles.tst}
            quality="100"
            />
            </div>
            <div style={{
            color: 'rgba(3,87,85,1)',
            fontFamily: 'Helvetica',
            fontWeight: '600',
            fontSize: '1.2vw',
            marginTop:'2em',
            width: '12vw',
            border: '2px solid black',
            textAlign: 'center'
            
          }}>
            Air Transmission
            </div>
            <div style={{
              color: 'rgba(75,79,81,1)',
              fontSize: '1.1vw',
              fontStyle: 'Helvetica',
              lineHeight: '1.6',
              border: '2px solid black',
              marginTop: '3em',
             fontWeight: '400'
            }}>
                  Objectively Evolve Tatical Expertise Before
                  Extensible Initiatives. Efficiently Simplyify
            </div>
          </div>


          <div className={styles.contaCards2}>
            <div>
              <StaticImage 
              src="../images/handshake_card.svg"
              quality="100"
              className={styles.tst}
             
              />
            </div>
            <div style={{
            color: 'rgba(3,87,85,1)',
            fontFamily: 'Helvetica',
            fontWeight: '600',
            fontSize: '1.2vw',
            marginTop:'2em',
            width: '12vw',
            border: '2px solid black',
            textAlign: 'center'
            
          }}>
            Human Contacts
            </div>

            <div style={{
              color: 'rgba(75,79,81,1)',
              fontSize: '1.1vw',
              fontStyle: 'Helvetica',
              lineHeight: '1.6',
              border: '2px solid black',
              marginTop: '3em',
             fontWeight: '400'
            }}>
                  Washing Your Hands Is One Of The simplest Ways You Can Protect
            </div>
          </div>


          <div className={styles.contaCards3}>
          <div>
            <StaticImage 
            src="../images/juice_card.svg"
            className={styles.tst}
            quality="100"
            />
            </div>
            <div style={{
            color: 'rgba(3,87,85,1)',
            fontFamily: 'Helvetica',
            fontWeight: '600',
            fontSize: '1.2vw',
            marginTop:'2em',
            width: '12vw',
            border: '2px solid black',
            textAlign: 'center'
            
          }}>
            Contained Objects
            </div>
            <div style={{
              color: 'rgba(75,79,81,1)',
              fontSize: '1.1vw',
              fontStyle: 'Helvetica',
              lineHeight: '1.6',
              border: '2px solid black',
              marginTop: '3em',
             fontWeight: '400'
            }}>
                  Use The Tissue While Sneezing,In This Way, You
                  Can Protect Your Droplets.
            </div>
          </div>
        </div>
        
        <div className={styles.lightcorona}>
              <StaticImage 
              src="../images/corona_light.svg"
              />
        </div>
        <div className={styles.lightdarkcorona}>
              <StaticImage 
              src="../images/lightdarkcorona.svg"
              />
        </div>
     </div>
    </Layout>
  )
}


// export page query
export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        subtitle
        paragraph
      }
      id
    }
  }
}

`