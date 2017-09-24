// @flow
import { injectGlobal } from 'styled-components'
import { join, map, range } from 'lodash'
import { colors, bold, typeScale, scale } from './style'

injectGlobal`
* { box-sizing:border-box; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  line-height: 1.5;
  margin: 0;
  color: ${colors.black};
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
}

svg {
  max-height: 100%;
}

a {
  color: ${colors.blue};
  text-decoration: none;
}

strong {
  font-weight: bold;
}

h1, h2, h3, h4 {
  color: ${colors.steel};
  font-weight: bold;
  line-height: 1.25;
  margin-top: ${scale[2]}px;
  margin-bottom: ${scale[1]}px;
}

${join(
  map(range(1, 4), level => `h${level} { font-size: ${typeScale[level]}px; }`),
  '\n'
)}

p, ol, ul, pre, blockquote {
  margin-top: ${scale[2]}px;
  margin-bottom: ${scale[2]}px;
}
`
