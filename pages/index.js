// @flow
import React from 'react'
import { Html } from '@compositor/x0'
import cxs from 'cxs'

import App from '../components/App'
require('../basic')
import { colors } from '../style'

const title = 'Fossil Funded'
const desc =
  'See if the fossil fuel industry is funding your Representative—and speak out.'
const url = 'https://fossilfunded.now.sh'
const icon = url + '/static/icon.png'

/*
<meta name="author" content="Lachlan Campbell" />
<meta name="theme-color" content={colors.red} />
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

export default () => (
  <Html
    title={title}
    description={desc}
    image={icon}
    css={cxs.css()}
    children={<App />}
  />
)
