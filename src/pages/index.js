import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout.js'


const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
      <h1>Collection of stuff made here</h1>
      <p>Following a tutorial...</p>
      </Layout>
    </main>

  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
