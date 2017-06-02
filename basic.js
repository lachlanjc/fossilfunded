// @flow
import cxs from 'cxs/monolithic'
import { map, range } from 'lodash'
import { colors, bold, typeScale, scale } from './style'

cxs('body', {
  fontFamily: "'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
  lineHeight: 1.5,
  margin: 0,
  color: colors.black
})

cxs('img', {
  maxWidth: '100%',
  height: 'auto'
})

cxs('svg', {
  maxHeight: '100%'
})

cxs('a', {
  color: colors.blue,
  textDecoration: 'none'
})

cxs('strong', {
  fontWeight: bold
})

cxs('h1, h2, h3, h4, h5, h6', {
  color: colors.steel,
  fontWeight: bold,
  lineHeight: 1.25,
  marginTop: scale[2],
  marginBottom: scale[1]
})

map(range(1, 6), (level: number) => {
  cxs('h' + level, { fontSize: typeScale[level] })
})

cxs('p, ol, ul, pre, blockquote', {
  marginTop: scale[2],
  marginBottom: scale[2]
})
