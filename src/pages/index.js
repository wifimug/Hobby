import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout.js'
import { StaticImage } from 'gatsby-plugin-image'
import {container, imageContainer} from '../css/index.scss'


const IndexPage = () => {
  return (
    <div className={container}>
      <main>
        <Layout>
        <h1>A website for documenting my experimentations on various things</h1>
        <p>Following a tutorial...</p>
        <div className={imageContainer}>
          <StaticImage alt="Ella"
          src="../images/Ella2022.png"/>
        </div>

        
        </Layout>
      </main>
    </div>

  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
