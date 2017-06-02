// @flow
import React from 'react'
import { Box } from 'axs'
import { Heading, Span } from 'axs-ui'
import { bold, colors } from '../style'

export const Container = ({ width = 32, ...props }: { width?: number }) => (
  <Box px2 py4 mx="auto" css={{ maxWidth: width * 16 }} {...props} />
)

// export const Section = (props: any) => <Box {...props} is="section" mb3 />

// export const SectionHeading = ({ name, ...props }: { name: string }) => (
//   <Heading level={2} fontSize={3} color={colors.blue} mt0 mb2 {...props}>
//     {name}
//   </Heading>
// )

export const SectionHeading = ({ name, ...props }: { name: string }) => (
  <Heading
    {...props}
    level={2}
    fontSize={3}
    color={colors.blue}
    mt0
    mb2
    css={{
      position: 'relative',
      fontWeight: bold,
      lineHeight: 1.25,
      ':after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: colors.smoke,
        zIndex: -1
      }
    }}
  >
    <Span bg="white" display="inline-block" pr2>{name}</Span>
  </Heading>
)
