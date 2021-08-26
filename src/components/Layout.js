import React from 'react'
import NavBar from './NavBar'
import '../styles/global.css'
const Layout = ({children}) => {
    return (
        <div className="layout">
            <NavBar />
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default Layout
