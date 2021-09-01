import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import '../styles/global.css'
const Layout = ({children}) => {
    return (
        <div className="layout">
            <NavBar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
