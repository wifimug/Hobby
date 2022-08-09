import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout.js'
import { StaticImage } from 'gatsby-plugin-image'
import {container} from '../css/index.scss'


const IndexPage = () => {
  return (
    <div className={container}>
      <main>
        <Layout pageTitle="Home Page">
        <h1>Collection of stuff made here</h1>
        <p>Following a tutorial...</p>
        <StaticImage alt="Ella"
        src="../images/Ella2022.png"/>
        </Layout>
      </main>
    </div>

  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
