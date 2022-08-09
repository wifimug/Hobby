import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    siteContainer,
    navBar,
    siteTitle,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    accentContainer,
    semiCircleAccent,
    circleAccent,
    circleRingAccent
     } from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
        <div className={container}>
            <div className={siteContainer}>
                <div className={navBar}>
                    <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                    <header className={siteTitle}>{data.site.siteMetadata.title}</header>
                    <nav>
                        <ul className={navLinks}>
                            <li className={navLinkItem}>
                                <Link to="/" className={navLinkText}>Home</Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/about" className={navLinkText}>About</Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/blog" className={navLinkText}>Blog</Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/art" className={navLinkText}>Art</Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="/cat" className={navLinkText}>Kitty</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={accentContainer}>
                <main className={heading}>
                    <div className={semiCircleAccent}>
                        <div className={siteContainer}>
                            <h1>{pageTitle}</h1>
                            {children}
                        </div>
                        <div className={circleAccent}></div>
                        <div className={circleRingAccent}></div>
                    </div>
                </main>
            </div>
        </div>
            
    )
}

export default Layout