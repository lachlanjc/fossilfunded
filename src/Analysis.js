// @flow
import React from 'react'
import { Container, Box, Text, Heading, Flex } from 'rebass'
import { SectionHeading, SubHeading } from './ui'
import { bold, colors } from '../style'
import commaNumber from 'comma-number'
import data from '../data/analysis.json'

const { summary } = data
const per = data.percentages

const Span = Text.extend.attrs({ is: 'span' })``

const Analysis = () => (
  <Box py={3}>
    <SectionHeading>Analysis</SectionHeading>
    <SubHeading>Top companies</SubHeading>
    <Flex justify="center" wrap mt={1} mx={[null, -2]}>
      <Chip amt="$9,501,803">Koch Industries</Chip>
      <Chip amt="$5,116,216">Chevron Corp</Chip>
      <Chip amt="$4,809,612">Ariel Corp</Chip>
      <Chip amt="$4,127,231">Stewart & Stevenson</Chip>
      <Chip amt="$4,067,802">Western Refining</Chip>
      <Chip amt="$3,000,000">Petrodome Energy</Chip>
    </Flex>
    <SubHeading>Paid the House</SubHeading>
    <Flex justify="center" align="center">
      <Span f={2}>${commaNumber(summary.total)}</Span>
      <Span ml={1}>in total, 2016</Span>
    </Flex>
    <SubHeading>The maximum</SubHeading>
    <Flex justify="center" align="center">
      <Span f={2}>${commaNumber(summary.max)}</Span>
      <Span ml={1}>(Paul Ryan)</Span>
    </Flex>
    <SubHeading>Americans on climate change</SubHeading>
    <LineChart value={0.32} color={colors.slate}>
      32% deny
      <Break />human cause
    </LineChart>
    <LineChart value={0.63}>
      63% represented
      <Break /> by a denier
    </LineChart>
    <SubHeading>Of those funded</SubHeading>
    <LineChart value={per.republicansFunded.value}>
      {per.republicansFunded.label} are Republicans
      <Break /> ({per.republicans.label} overall)
    </LineChart>
    <LineChart value={per.malesFunded.value} color={colors.blue}>
      {per.malesFunded.label} are men
      <Break /> ({per.males.label} overall)
    </LineChart>
  </Box>
)

export default Analysis

const Chip = Box.extend.attrs({
  px: 2,
  bg: colors.purple,
  color: 'white',
  mr: 1,
  mb: 1
})`
  display: inline-flex;
  align-items: center;
  border-radius: 1rem;
  line-height: 2;
  font-weight: ${bold};

  &:after {
    content: "${props => props.amt}";
    color: ${colors.snow};
    display: inline-block;
    font-size: .8em;
    font-weight: 400;
    margin-left: .5rem;
  }
`

const Break = Box.extend.attrs({ is: 'br' })``

const LineChartBase = Box.extend.attrs({ bg: colors.smoke, w: 1, mt: 1 })`
  border-radius: 4rem;
  line-height: 1.25;
`
const LineChartInner = Box.extend.attrs({ py: 1 })`
  border-radius: 4rem 0 0 4rem;
`

export const LineChart = ({
  value = 0.5,
  color = colors.red,
  ...props
}: {
  value: number,
  color?: string
}) => (
  <LineChartBase>
    <LineChartInner bg={color} rounded="left" w={value}>
      <Text color="white" mx={1}>
        {props.children}
      </Text>
    </LineChartInner>
  </LineChartBase>
)
