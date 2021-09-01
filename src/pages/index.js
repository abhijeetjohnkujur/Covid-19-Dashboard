 /* eslint-disable */
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
        <div className={styles.title}>{sitedata[2].frontmatter.title}</div>
        <div className={styles.subtitle}>{sitedata[2].frontmatter.subtitle}</div>
        <div className={styles.para}>{sitedata[2].frontmatter.paragraph}</div>
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
          className={styles.landingCorona}
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

        <div>
        <StaticImage 
        src="../images/bubble_color_corona.svg"
        alt="bubble_color_corona"
        className={styles.coronacolorbubble}
        />
        </div>
        
        
      </div>

      {/* Right column */}

      <div className={styles.coronaInfo}>
        <div className={styles.coronaInfoData}>
            <div className={styles.titles}>{sitedata[1].frontmatter.title}</div>
            <div className={styles.subtitle}>{sitedata[1].frontmatter.subtitle}</div>
            <div className={styles.paras}>{sitedata[1].frontmatter.paragraph}</div>
            <div className={styles.learnMore}>
           <Link to='/learnmore' style={{color: 'rgba(250,86,82,1)'}}> Learn More</Link>
           </div>
        </div>
        
      </div>

      <div className={styles.coronaLight}>
      <StaticImage 
          src="../images/corona_light_pink_half.svg"
          alt="Corona Light"
          className={styles.coronaLightimage}
          />

      </div>

         
      </div>

    {/* This is the 3rd container which contains the contagion information in a flexbox format */}

     <div className={styles.contaParent} >

        <div className={styles.titles} style={{marginBottom:'2em'}}>{sitedata[0].frontmatter.title}</div>
        <div  className={styles.subtitle} >{sitedata[0].frontmatter.subtitle}</div>
        <div className={styles.parasConta}>{sitedata[0].frontmatter.paragraph}</div>

        <div className={styles.contaCards}>
          <div className={styles.contaCards1} style={{ borderBottom: '6px solid #FA5652'}}>
            <div>
            <StaticImage 
            src="../images/girl_card.svg"
            className={styles.tst}
            quality="100"
            alt="girl card"
            />
            </div>
            <div className={styles.contacardTitle}>
            Air Transmission
            </div>
            <div className={styles.contacarddetail}>
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
             alt="handshake"
              />
            </div>
            <div className={styles.contacardTitle}>
            Human Contacts
            </div>

            <div className={styles.contacarddetail}>
                  Washing Your Hands Is One Of The simplest Ways You Can Protect
            </div>
          </div>


          <div className={styles.contaCards3}>
          <div>
            <StaticImage 
            src="../images/juice_card.svg"
            className={styles.tst}
            quality="100"
            alt="juice"
            />
            </div>
            <div className={styles.contacardTitle}>
            Contained Objects
            </div>
            <div className={styles.contacarddetail}>
                  Use The Tissue While Sneezing,In This Way, You
                  Can Protect Your Droplets.
            </div>
          </div>
        </div>
        
        <div className={styles.lightcorona}>
              <StaticImage 
              src="../images/corona_light.svg"
              alt="corona"
              />
        </div>
        <div className={styles.lightdarkcorona}>
              <StaticImage 
              src="../images/lightdarkcorona.svg"
              alt="corona"
              />
        </div>
     </div>

    {/* This is the 4th container which contains the symptoms information in a flexbox format */}

    <div className={styles.sympparent}>

            <div className={`${styles.titles}  ${styles.motitles}`} style={{marginBottom:'2em'}}>
            {sitedata[3].frontmatter.title}
            </div>

            <div className={`${styles.subtitle} ${styles.mosubtitle}`}>
            {sitedata[3].frontmatter.subtitle}
            </div>

            <div className={`${styles.parasSymp} ${styles.moparasSymp}`}>
            {sitedata[3].frontmatter.paragraph}
            </div>

            <div style={{
              width:'90vw',
              
            }}>
              <StaticImage
              src="../images/girlsymptoms.svg"
              quality="100"
              className={styles.girlSymp}
              alt="girl symptoms"
              />
            </div>
    </div>

    {/* This is the 5th container which contains the precaution information in a flexbox format */}

    <div className={styles.precautionParent}>

          <div className={styles.precautionBox1}>

              <div className={styles.titles} style={{marginBottom:'2em'}}>{sitedata[4].frontmatter.title}</div>
              <div className={styles.subtitle}>{sitedata[4].frontmatter.subtitle}</div>
              <div className={styles.paras}>{sitedata[4].frontmatter.paragraph}</div>

          </div>


          <div className={styles.precautionBox2}> 

              <div style={{
                // border:'2px solid black',
                display:'flex',
                marginTop: '2em',
                position: 'relative'
              }} className={styles.pbContainerOne}>
                
                {/* Left container containing steps and details in nested flexbox design */}
                <div style={{
                  // border:'2px solid black',
                  display: 'flex',
                  
                }} className={styles.precautionboxmob}> 
                    <div
                    style={{
                      marginRight:'1em',
                      // border: '4px solid green',
                      height: '10vh',
                      marginTop: '11%'
                    }} className={styles.number}
                    ><StaticImage src="../images/one.svg" alt="one"/></div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      // border: '2px solid black',
                      width:'40vw',
                      justifyContent: 'center'
                      
                    }} className={styles.precautionContainer}>
                      <div style={{
                        color:'rgba(3, 87, 85, 1)',
                        fontFamily: 'Helvetica',
                        fontWeight: '600',
                        fontSize: '2vw',
                        marginTop: '0.4em'
                      }} className={styles.precautiontopic}>{sitedata[8].frontmatter.Topic}</div>
                      <div style={{
                        color: 'rgba(75, 79, 81, 1)',
                        fontSize: '0.9vw',
                        lineHeight: '2',
                        marginTop: '2em',
                        
                      }} className={styles.precautiondetails}>{sitedata[8].frontmatter.Details}</div>
                    </div>
                </div>

                {/* Right container containing picture in flexbox container */}
                <div style={{
                  width: '20vw'
                }} className={styles.precautionpic}>
                      <StaticImage 
                      src="../images/wear_mask.svg"
                      quality="100"
                      alt="wearmask"
                      />
                </div>

                  
              </div>

              <div style={{
                // border:'2px solid black',
                display:'flex',
                marginTop: '2em',
                flexDirection:'row-reverse'
              }} className={styles.pbContainertwo}>
                
                {/* Left container containing steps and details in nested flexbox design */}
                <div style={{
                  // border:'2px solid black',
                  display: 'flex',
                  
                }} className={styles.precautionboxmob}> 
                    <div
                    style={{
                      marginRight:'1em',
                      height: '10vh',
                      marginTop: '11%'
                    }} className={styles.number}
                    ><StaticImage src="../images/two.svg" alt="two"/></div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      // border: '2px solid black',
                      width:'40vw',
                      justifyContent: 'center'
                    }} className={styles.precautionContainer}>
                      <div style={{
                        color:'rgba(3, 87, 85, 1)',
                        fontFamily: 'Helvetica',
                        fontWeight: '600',
                        fontSize: '2vw',
                        marginTop: '0.4em'
                      }} className={styles.precautiontopic}>{sitedata[7].frontmatter.Topic}</div>
                      <div style={{
                        color: 'rgba(75, 79, 81, 1)',
                        fontSize: '0.9vw',
                        lineHeight: '2',
                        marginTop: '2em',
                        
                      }}  className={styles.precautiondetails}>{sitedata[7].frontmatter.Details}</div>
                    </div>
                </div>

                {/* Right container containing picture in flexbox container */}
                <div style={{
                  width: '20vw'
                  
                }} className={styles.precautionpic}>
                      <StaticImage 
                      src="../images/wash_hand.svg"
                      quality="100"
                      alt="washhand"
                      />
                </div>

              </div>

              <div style={{
                // border:'2px solid black',
                display:'flex',
                marginTop: '2em'
              }} className={styles.pbContainerOne}>
                
                {/* Left container containing steps and details in nested flexbox design */}
                <div style={{
                  // border:'2px solid black',
                  display: 'flex'
                }} className={styles.precautionboxmob}> 
                    <div
                    style={{
                      marginRight:'1em',
                      height: '10vh',
                      marginTop: '11%'
                    }} className={styles.number}
                    ><StaticImage src="../images/three.svg" alt="three"/></div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      // border: '2px solid black',
                      width:'40vw',
                      justifyContent: 'center'
                    }} className={styles.precautionContainer}>
                      <div style={{
                        color:'rgba(3, 87, 85, 1)',
                        fontFamily: 'Helvetica',
                        fontWeight: '600',
                        fontSize: '2vw',
                        marginTop: '0.4em'
                      }} className={styles.precautiontopic}>{sitedata[5].frontmatter.Topic}</div>
                      <div style={{
                        color: 'rgba(75, 79, 81, 1)',
                        fontSize: '0.9vw',
                        lineHeight: '2',
                        marginTop: '2em',
                        
                      }} className={styles.precautiondetails}>{sitedata[5].frontmatter.Details}</div>
                    </div>
                </div>

                {/* Right container containing picture in flexbox container */}
                <div style={{
                  width: '20vw'
                }} className={styles.precautionpic}>
                      <StaticImage 
                      src="../images/usenose.svg"
                      quality="100"
                      alt="use nose"
                      />
                </div>

              </div>


              <div style={{
                // border:'2px solid black',
                display:'flex',
                marginTop: '2em',
                flexDirection: 'row-reverse',
                position: 'relative'
              }} className={styles.pbContainertwo}>
                
                {/* Left container containing steps and details in nested flexbox design */}
                <div style={{
                  // border:'2px solid black',
                  display: 'flex'
                }} className={styles.precautionboxmob}> 
                    <div
                    style={{
                      marginRight:'1em',
                      height: '10vh',
                      marginTop: '14%'
                    }} className={styles.number}
                    ><StaticImage src="../images/four.svg" alt="four"/></div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      // border: '2px solid black',
                      width:'40vw',
                      justifyContent: 'center'
                    }} className={styles.precautionContainer}>
                      <div style={{
                        color:'rgba(3, 87, 85, 1)',
                        fontFamily: 'Helvetica',
                        fontWeight: '600',
                        fontSize: '2vw',
                        marginTop: '0.4em'
                      }} className={styles.precautiontopic}>{sitedata[6].frontmatter.Topic}</div>
                      <div style={{
                        color: 'rgba(75, 79, 81, 1)',
                        fontSize: '0.9vw',
                        lineHeight: '2',
                        marginTop: '2em',
                        
                      }} className={styles.precautiondetails}>{sitedata[6].frontmatter.Details}</div>
                    </div>
                </div>

                {/* Right container containing picture in flexbox container */}
                <div style={{
                  width: '20vw'
                }} className={styles.precautionpic}>
                      <StaticImage 
                      src="../images/avoidContact.svg"
                      quality="100"
                      alt="avoid contact"
                      />
                </div>
                
                
              </div>



             

          </div>

           <div style={{
                    position: 'absolute',
                   
                    top:'25%',
                    // border: '2px solid black',
                    maxWidth: 'auto'
                  }} className={styles.mobcorona}>
                    <StaticImage 
                      src="../images/greencorona_half.svg"
                      quality="100"
                      alt="corona"
                    />
                  </div>

                  <div style={{
                    maxWidth: '70vw',
                    position: 'absolute',
                    right: '0',
                    top: '72%'
                  }} className={styles.mobcorona}>
                  <StaticImage 
                  src="../images/greencoronasmall.svg"
                  quality="100"
                  alt="corona small"
                  />
                  
                </div>

                <div style={{
                    maxWidth: 'auto',
                    position: 'absolute',
                    right: '0',
                    top: '80%'
                  }} className={styles.mobcorona}>
                      <StaticImage 
                  src="../images/corona_Red_half.svg"
                  quality="100"
                  alt="half red corona"
                  />
                </div> 

    </div>



{/* Map container */}

<div className={styles.mapContainer}>

<div className={styles.mapBox}>
      <StaticImage 
      src="../images/map.svg"
      className={styles.worldMap}
      quality="100"
      alt="world map"
      />

      <div className={styles.mapwidget}>
        <StaticImage 
        src="../images/mapwidget.svg"
        className={styles.maptool}
        alt="map tool"
        />
      </div>

      <div className={styles.mapsearch}>
        <StaticImage 
        src="../images/mapsearch.svg"
        className={styles.mapsearchtool}
        alt="map search tool"
        />
      </div>
</div>

    <div className={styles.coronareport}>
    <StaticImage 
    src="../images/livereport.svg"
    className={styles.livereport}
    alt="live report image"
    />

    <div className={styles.reporttoggle}>
            
            <button><StaticImage src="../images/left.svg" alt="left arrow"/></button> 
            <StaticImage src="../images/line.svg" alt="vertical line"/> 
            <button><StaticImage src="../images/right.svg" alt="right arrow"/></button>
    </div>
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
        Details
        Topic
        title
        subtitle
        paragraph
      }
      id
    }
  }
}

`