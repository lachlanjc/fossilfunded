// @flow
import React from 'react'
import { Box, Text } from 'axs'
import { Heading, Flex, Span } from 'axs-ui'
import { SectionHeading, SubHeading } from './ui'
import { bold, colors } from '../style'
import commaNumber from 'comma-number'
import data from '../data/analysis.json'

const { summary } = data
const per = data.percentages

const Analysis = () => (
  <Box py3>
    <SectionHeading>Analysis</SectionHeading>
    <SubHeading>Top companies + friends</SubHeading>
    <Flex flexWrap="wrap" mt1>
      <Chip amt="$9,501,803">Koch Industries</Chip>
      <Chip amt="$5,116,216">Chevron Corp</Chip>
      <Chip amt="$4,809,612">Ariel Corp</Chip>
      <Chip amt="$4,127,231">Stewart & Stevenson</Chip>
      <Chip amt="$4,067,802">Western Refining</Chip>
      <Chip amt="$3,000,000">Petrodome Energy</Chip>
    </Flex>
    <SubHeading>Paid the House</SubHeading>
    <Flex alignItems="center">
      <Span fontSize={2}>
        ${commaNumber(summary.total)}
      </Span>
      <Span ml1>in total, 2016</Span>
    </Flex>
    <SubHeading>The maximum</SubHeading>
    <Flex alignItems="center">
      <Span fontSize={2}>
        ${commaNumber(summary.max)}
      </Span>
      <Span ml1>(Paul Ryan)</Span>
    </Flex>
    <SubHeading>Americans on climate change</SubHeading>
    <LineChart value={0.32} color={colors.slate}>
      32% deny issue
    </LineChart>
    <LineChart value={0.63}>
      63% represented
      <Break />{' '}
      by a denier
    </LineChart>
    <SubHeading>Of those funded</SubHeading>
    <LineChart value={per.republicansFunded.value}>
      {per.republicansFunded.label} are Republicans
      <Break />{' '}
      ({per.republicans.label} overall)
    </LineChart>
    <LineChart value={per.malesFunded.value} color={colors.blue}>
      {per.malesFunded.label} are men
      <Break />{' '}
      ({per.males.label} overall)
    </LineChart>
  </Box>
)

export default Analysis

const Chip = ({ amt, ...props }: { amt: string }) => (
  <Box
    px1
    rounded
    bg={colors.purple}
    white
    css={{ lineHeight: 2 }}
    mr1
    mb1
    {...props}
  >
    <Span css={{ fontWeight: bold }}>{props.children}</Span>{' '}
    <Span fontSize={5} color={colors.smoke}>{amt}</Span>
  </Box>
)

const Break = (props: any) => (
  <Box is="br" display={['block', 'none']} {...props} />
)

const LineChart = ({
  value = 0.5,
  color = colors.red,
  ...props
}: {
  value: number,
  color?: string
}) => (
  <Box bg={colors.smoke} width={1} rounded mt1>
    <Box bg={color} rounded="left" py1 width={value}>
      <Text white mx1 css={{ lineHeight: 1.25 }}>{props.children}</Text>
    </Box>
  </Box>
)
