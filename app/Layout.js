import React from 'react';

import Head from 'next/head';

// round brackets (instead of '{') mean that we want just to return the value
const Layout = ({ children }) => (

  <div>
    <Head>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" />
    </Head>

    <div
      style={{
        backgroundColor: '#eeeeee',
        maxWidth: '960px',
        padding: '1em',
        margin: '0 auto',
        marginTop: '30px'
      }}>
      {children}
    </div>
  </div>
)

export default Layout;
