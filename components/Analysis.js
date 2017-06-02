// @flow
import React from 'react'
import { Box, Text } from 'axs'
import { Heading, Flex, Span } from 'axs-ui'
import { SectionHeading } from './ui'
import { bold, colors } from '../style'
import { isString, isNumber } from 'lodash'
import commaNumber from 'comma-number'
import data from '../data/analysis.json'

const { summary } = data
const per = data.percentages

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

const Analysis = () => (
  <Box py3>
    <SectionHeading name="Analysis" />
    <Heading level={3} fontSize={4} caps>Top companies + friends</Heading>
    <Flex flexWrap="wrap" mt1>
      <Chip amt="$9,501,803">Koch Industries</Chip>
      <Chip amt="$5,116,216">Chevron Corp</Chip>
      <Chip amt="$4,809,612">Ariel Corp</Chip>
      <Chip amt="$4,127,231">Stewart & Stevenson</Chip>
      <Chip amt="$4,067,802">Western Refining</Chip>
      <Chip amt="$3,000,000">Petrodome Energy</Chip>
    </Flex>
    <Heading level={3} fontSize={4} caps mt2>Paid the House</Heading>
    <Flex alignItems="center">
      <Span fontSize={2}>
        ${commaNumber(summary.total)}
      </Span>
      <Span ml1>in total, 2016</Span>
    </Flex>
    <Heading level={3} fontSize={4} caps mt2>The maximum was</Heading>
    <Flex alignItems="center">
      <Span fontSize={2}>
        ${commaNumber(summary.max)}
      </Span>
      <Span ml1>(Paul Ryan)</Span>
    </Flex>
    <Heading level={3} fontSize={4} caps mt2>Of those funded</Heading>
    <Box bg={colors.smoke} width={1} rounded mb1>
      <Box
        bg={colors.red}
        rounded="left"
        mt1
        py1
        width={per.republicansFunded.value}
      >
        <Text white mx1>
          {per.republicansFunded.label} are Republicans
          <Box is="br" display={['block', 'none']} />{' '}
          ({per.republicans.label} overall)
        </Text>
      </Box>
    </Box>
    <Box bg={colors.smoke} width={1} rounded>
      <Box bg={colors.blue} rounded="left" py1 width={per.malesFunded.value}>
        <Text white mx1>
          {per.malesFunded.label} are men
          <Box is="br" display={['block', 'none']} />{' '}
          ({per.males.label} overall)
        </Text>
      </Box>
    </Box>
  </Box>
)

export default Analysis

/*
const Stat = ({ value, label, unit, ...props }: { value }) => (
    <Box display="inline-block" width={[1, 1 / 2]} mb2 {...props}>
      <Span fontSize={1} css={{ fontWeight: 300, lineHeight: 1 }}>
        {value}
        <Span fontSize={3}>{unit}</Span>
      </Span>
      {label && <Text fontSize className="stat__label" children={label} />}
    </Box>
  )
*/
