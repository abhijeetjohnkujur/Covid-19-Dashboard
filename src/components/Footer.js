import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from '../styles/footer.module.css'
export default function Footer() {
    return (
        <>
            <div className={styles.mainContainer}>

                <div className={styles.questions}>Have Questions in mind? <br></br>Let us help you</div>
                <div className={styles.sendemail}>
                    <input placeholder="snmonydemo@gmail.com"
                    style={{width: '12vw',
                            border: 'none',
                           
                }}
                    />

                <button
                style={{
                    width: '7.5vw',
                    paddingTop: '1.5em',
                    paddingBottom: '1.5em',
                    borderRadius: '46px',
                    background: '#F44A45',
                    border: 'none',
                    color: 'white',
                    fontWeight: '600'
                }}
                >Send</button>
                </div>
                
                <div className={styles.footer_Section}>
                    <div className={styles.footerlogo}>
                        <StaticImage 
                        src="../images/corona_virus.svg"
                        alt="corona virus logo"
                        className={styles.coronalogo}
                        /> 

                        <div className={styles.covidName}>
                            COVID-19
                        </div>
                    </div>
                    
                    <div className={styles.footerLink}>
                        <div><Link to='/' style={{color: 'rgba(0, 64, 46, 1)'}}>Overview</Link></div>
                        <div><Link to='/symptoms' style={{color: 'rgba(0, 64, 46, 1)'}}>Symptoms</Link></div>
                        <div><Link to='/prevention' style={{color: 'rgba(0, 64, 46, 1)'}}>Prevention</Link></div>
                        <div><Link to='/treatment' style={{color: 'rgba(0, 64, 46, 1)'}}>Treatment</Link></div>
                    </div>

                    <div className={styles.socialContainer}>
                        <Link to="facebook.com"><StaticImage src="../images/facebook.svg" className={styles.socialImage} alt="facebook Logo"/></Link>
                        <Link to="/youtube.com"><StaticImage src="../images/youtube.svg" className={styles.socialImage} alt="Youtube Logo"/></Link>
                        <Link to="/vimeo.com"><StaticImage src="../images/vimeo.svg" className={styles.socialImage} alt="Vimeo Logo"/></Link>
                        <Link to="/twitter.com"><StaticImage src="../images/twitter.svg" className={styles.socialImage} alt="Twitter Logo"/></Link>
                    </div>
                </div>

                <div style={{color: 'rgba(65, 94, 86, 1)', fontFamily:'Helvetica', marginTop: '2%', fontWeight: '500'}}>
                2020 @ All rights reserved by pixelspark.co
                </div>
            </div>
        </>
    )
}
