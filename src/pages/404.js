import React from 'react'
import Layout from '../components/Layout'

export default function NotFound(){
  return (
    <Layout>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: 'hsla(179, 93%, 18%, 1)',
          fontWeight: '400',
          fontFamily: 'Helvetica',
          fontSize: '6em'
        }}
        
        >Error 404</h2>
        <p style={{
          color: 'black',
          fontWeight: '400',
          fontFamily: 'Helvetica',
          fontSize: '2em'
        }}
        
        >Sorry, The page doesn't exist!😥</p>
      </div>
    </Layout>
  )
}