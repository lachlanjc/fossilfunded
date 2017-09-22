const { createElement: h } = require('react')
const { colors } = require('../style')

const width = 512
const widthIcon = 0.75 * width
const padding = 0.125 * width

module.exports = props =>
  h(
    'div',
    {
      style: {
        boxSizing: 'border-box',
        margin: 0,
        padding,
        width,
        height: width,
        backgroundColor: colors.blue,
        backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.25))',
        backgroundBlendMode: 'overlay'
      }
    },
    h('img', {
      src: 'https://icon.now.sh/opacity/ffffff',
      style: { width: widthIcon }
    })
  )
