// @flow
import React from 'react'
import { Border, Box, Heading, Subhead } from 'rebass'
import { bold, colors } from '../style'

export const Container = Box.extend.attrs({ p: 2, mx: 'auto' })`
  max-width: ${props => props.width || 32}rem;
`

// export const Section = (props: any) => <Box {...props} is="section" mb={3} />

export const SectionHeading = (props: any) => (
  <Border bottom color={colors.smoke} pb={1} mb={2}>
    <Subhead is="h2" f={3} color={colors.blue} my={0} mx="auto" {...props} />
  </Border>
)

export const SubHeading = (props: any) => (
  <Subhead f={4} caps mt={2} {...props} />
)
