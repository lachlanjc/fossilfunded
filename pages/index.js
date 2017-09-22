// @flow
import React from 'react'
import { Html } from '@compositor/x0'
import cxs from 'cxs'
import { ServerStyleSheet } from 'styled-components'

import App from '../src/App'
require('../basic')
import { colors } from '../style'

const title = 'Fossil Funded'
const desc =
  'See if the fossil fuel industry is funding your Representative—and speak out.'
const url = 'https://fossilfunded.lachlanjc.me'
const icon = url + '/icon.png'

const css = `*{box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;margin:0}`

/*
<meta name="author" content="Lachlan Campbell" />
<meta name="theme-color" content={colors.blue} />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@lachlanjc" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={desc} />
<meta name="twitter:image" content={icon} />
<meta property="og:site_name" content={title} />
<meta property="og:title" content={title} />
<meta property="og:url" content={url} />
<meta property="og:image" content={icon} />
<meta property="og:description" content={desc} />
*/

export default props => {
  const sheet = new ServerStyleSheet()
  sheet.collectStyles(<App />)

  const styles = css + sheet.getStyleElement() + cxs.css()

  return (
    <Html
      title={title}
      description={desc}
      image={icon}
      css={styles}
      {...props}
    />
  )
}
