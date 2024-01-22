import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>🫕 Potlock Eco</span>,
  project: {
    link: 'https://github.com/PotLock/ecosystem',
  },
  docsRepositoryBase: 'https://github.com/PotLock/ecosystem',
  footer: {
    text: '🫕 Potlock',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Ecosystem building on Potlock" />
      <meta name="og:title" content="Ecosystem Potlock" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="/PotLockEco.png" />
    </>
  ),
}


export default config
