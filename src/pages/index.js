
import React from 'react'
import Layout from '../components/Layout'
import '../styles/global.css'
import { graphql, Link } from 'gatsby'
import * as styles from '../styles/landing.module.css'

export default function index({ data }) {
  console.log(data)
  const sitedata = data.allMarkdownRemark.nodes
  console.log(sitedata[0].frontmatter.title)
  return (
    <Layout>
    
    {/* This is the container which contains the landing page info and svg image in a flexbox format */}
    <div className={styles.main}>

    {/* Left Info */}
      <div className={styles.leftInfo}>
        <div className={styles.leftInfoData}>
        <div className={styles.title}>{sitedata[0].frontmatter.title}</div>
        <div className={styles.subtitle}>{sitedata[0].frontmatter.subtitle}</div>
        <div className={styles.para}>{sitedata[0].frontmatter.paragraph}</div>
        <div className={styles.help}><Link >Let Us Help</Link></div>
        </div>
      </div>

    {/* Right Info */}

      <div className={styles.pic}>

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