import { Link } from 'gatsby'
import React from 'react'
import * as stylesNav from '../styles/nav.module.css'
export default function NavBar() {
    return (
        <nav className={stylesNav.navigator}>
            <div style={{
                marginLeft: '18em'
            }}>
            <h1 className={stylesNav.headerFont}>COVID-19</h1>
            </div>
            
            <div className={stylesNav.navigatorBox}>
                <div style= {{
                    
                
                }}>
                <Link to="/" className={stylesNav.navOverview}>Overview</Link>
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
