// @flow
import React from 'react'
import { Box } from 'axs'
import { Heading, Span } from 'axs-ui'
import { bold, colors } from '../style'

export const Container = ({ width = 32, ...props }: { width?: number }) => (
  <Box px2 py4 mx="auto" css={{ maxWidth: width * 16 }} {...props} />
)

// export const Section = (props: any) => <Box {...props} is="section" mb3 />

export const SectionHeading = (props: any) => (
  <Heading level={2} fontSize={3} color={colors.blue} mt0 mb2 {...props} />
)

export const SubHeading = (props: any) => (
  <Heading level={3} fontSize={4} caps mt2 {...props} />
)
