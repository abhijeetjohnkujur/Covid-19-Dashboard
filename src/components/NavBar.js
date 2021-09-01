import { Link } from 'gatsby'
import React from 'react'
import * as stylesNav from '../styles/nav.module.css'
import { StaticImage } from 'gatsby-plugin-image'
export default function NavBar() {

    

    return (
        <nav className={stylesNav.navigator}>
            <div className={stylesNav.headbox}>
                <StaticImage 
                src="../images/corona_virus.svg"
                alt="Virus"
                style={{marginRight:'0.8em'}}
                placeholder="tracedSVG"
                quality="100"
                className={stylesNav.coronalogoheader}
                />
            <h1 className={stylesNav.headerFont}>COVID-19</h1>
            </div>
            
           

            <div className={stylesNav.navigatorBox}>
                <div>
                <Link to="/childrenPages/" className={stylesNav.navOverview}>Overview</Link>
                <div className={stylesNav.overDot}></div>
                </div>
                <Link to="/Contagion" className={stylesNav.navLinks}>Contagion</Link>
                <Link to="/Symptons" className={stylesNav.navLinks}>Symptons</Link>
                <Link to="/Prevention" className={stylesNav.navLinks}>Prevention</Link>
                <div className={stylesNav.navConContainer}>
                <Link to="/Contact" className={stylesNav.navContact}>Contact</Link>
                </div>
            </div>
            
        </nav>
    )
}


