import Head from 'next/head'
import React from 'react'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />

        </Head>
        <Header />
        <div className={styles.container}>
        {children}
        </div>
        <Footer />
    </div>
  )
}

Layout.defaultProps = {
    title : 'DJ Events | Find the coolest parties',
    description: 'Find the latest DJ and other musical events',
    keywords: 'dj, music, events'

}