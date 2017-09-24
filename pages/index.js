// @flow
import React from 'react'
import { Html } from '@compositor/x0'
import { ServerStyleSheet } from 'styled-components'

import '../basic'
import App from '../src/App'
import { colors } from '../style'

const h = React.createElement

const title = 'Fossil Funded'
const description =
  'See if the fossil fuel industry is funding your Representative—and speak out.'
const url = 'https://fossilfunded.lachlanjc.me'
const image = url + '/icon.png'

const styles = `*{box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;margin:0}`

/*
<meta name="author" content="Lachlan Campbell" />
<meta name="theme-color" content={colors.blue} />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@lachlanjc" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={image} />
<meta property="og:site_name" content={title} />
<meta property="og:title" content={title} />
<meta property="og:url" content={url} />
<meta property="og:image" content={image} />
<meta property="og:description" content={description} />
*/

export default (props: any) => {
  const sheet = new ServerStyleSheet()
  sheet.collectStyles(<App />)

  const css = styles + sheet.getStyleElement()

  return h(Html, { title, description, image, css, children: h(App), ...props })
}
