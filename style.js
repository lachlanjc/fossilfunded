// @flow
import { first, last, map, join, merge } from 'lodash'

export const breakpoints: Array<string> = map(
  ['(min-width:40em)', '(min-width:52em)', '(min-width:64em)'],
  w => `@media screen and ${w}`
)

export const scale = [0, 8, 16, 32, 64]
export const typeScale = [64, 48, 32, 24, 16, 14, 12]

export const colors = {
  red: '#ff3333',
  orange: '#ff9933',
  green: '#2ee78a',
  blue: '#21a9a9',
  purple: '#b974ff',

  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  grey: '#8492a6',
  // smoke3: '#c0ccda',
  // smoke2: '#d3dce6',
  smoke: '#e0e6ed',
  // snow3: '#e5e9f2',
  // snow2: '#eff2f7',
  snow: '#f9fafc',
  white: '#ffffff'
}

export const borderRadius = 2
export const borderRadiusXl = borderRadius * 2
export const bold = 600
