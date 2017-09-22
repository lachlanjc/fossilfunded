// @flow
import cxs from 'cxs'
import { colors, bold, typeScale, scale } from './style'

const basic = cxs({
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Helvetica Neue', sans-serif",
  lineHeight: 1.5,
  margin: 0,
  color: colors.black,
  textAlign: 'center',

  ' img': {
    maxWidth: '100%'
  },

  ' svg': {
    maxHeight: '100%'
  },

  ' a': {
    color: colors.blue,
    textDecoration: 'none'
  },

  ' strong': {
    fontWeight: bold
  },

  ' h1, h2, h3, h4, h5, h6': {
    color: colors.steel,
    fontWeight: bold,
    lineHeight: 1.25,
    marginTop: scale[2],
    marginBottom: scale[1]
  },

  ' h1': { fontSize: typeScale[1] },
  ' h2': { fontSize: typeScale[2] },
  ' h3': { fontSize: typeScale[3] },
  ' h4': { fontSize: typeScale[4] },
  ' h5': { fontSize: typeScale[5] },
  ' h6': { fontSize: typeScale[6] },

  ' p, ol, ul, pre, blockquote': {
    marginTop: scale[2],
    marginBottom: scale[2]
  }
})

export default basic
