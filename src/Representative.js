// @flow
import React from 'react'
import styled from 'styled-components'
import { lowerCase } from 'lodash'
import commaNumber from 'comma-number'

import {
  Absolute,
  Circle,
  Border,
  Box,
  Text,
  Heading,
  Flex,
  Avatar,
  Relative
} from 'rebass'
import { bold, colors } from '../style'

import Contact from './Contact'

const Outline = Flex.extend.attrs({
  p: [2, 3],
  column: true,
  align: 'center',
  bg: 'white'
})`
  border: 1px solid ${colors.smoke};
  border-radius: 4px;
  text-align: center;
`

const Name = Heading.extend.attrs({
  is: 'h2',
  f: 3,
  mt: 0,
  mb: 1
})`font-weight: ${bold};`

type REP = {
  bioguideId: string,
  firstName: string,
  lastName: string,
  sortName?: string,
  state: string,
  funding: number,
  party: PARTIES,
  address: string,
  gender: 'male' | 'female', // :(
  twitter: string,
  website: string,
  phone: string
}
type PARTIES = 'Republican' | 'Democrat' | 'Independent'

const TopHalf = Flex.extend.attrs({ align: 'center' })`position: relative;`
const NameBox = Box.extend.attrs({ pl: 2 })`text-align: left;`

const Representative = ({ rep }: { rep: REP }) => (
  <Outline>
    <TopHalf>
      <Absolute top left>
        <Badge party={rep.party} />
      </Absolute>
      <Avi
        src={`https://twitter.com/${rep.twitter}/profile_image?size=original`}
      />
      <NameBox>
        <Name>
          {rep.firstName} {rep.lastName}
        </Name>
        {rep.funding === 0 ? (
          <Text color={colors.grey}>No funding in 2016.</Text>
        ) : (
          <Text color={colors.red}>
            Received <strong>${commaNumber(rep.funding)}</strong> in 2016
          </Text>
        )}
      </NameBox>
    </TopHalf>
    <Contact
      twitter={rep.twitter}
      website={rep.website}
      phone={rep.phone}
      address={rep.address}
    />
  </Outline>
)

const DisabledOutline = Outline.extend`pointer-events: none;`
const A = Circle.extend.attrs({ size: 24, bg: colors.grey })``
const B = Circle.extend.attrs({ size: 72, bg: colors.smoke })``
const Strip = Box.extend`
  background-color: ${props => props.bg};
  border-radius: 1rem;
  height: 1.25rem;
`
const GrayContact = styled(Contact)`
  filter: grayscale();
  opacity: 0.25;
`

export const BlankRepresentative = () => (
  <DisabledOutline>
    <Flex>
      <Relative>
        <Absolute left>
          <A />
        </Absolute>
        <B />
      </Relative>
      <Box ml={[1, 2]} style={{ flex: '1 1 auto' }}>
        <Strip w={3 / 4} bg={colors.grey} mb={1} />
        <Strip w={1 / 2} bg={colors.smoke} />
        <GrayContact twitter="demo" website="demo" phone="555" address="demo" />
      </Box>
    </Flex>
  </DisabledOutline>
)

const Avi = Avatar.extend.attrs({ size: 72 })`
  object-fit: cover;
  object-position: center;
  flex-shrink: 0;
`

const Badge = ({ party, ...props }: { party: PARTIES }) => {
  const bg = { republican: 'red', democrat: 'blue', independent: 'grey' }[
    lowerCase(party)
  ]
  const letter = party.slice(0, 1)
  const Base = Box.extend.attrs({ f: 6, color: 'white' })`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font-weight: ${bold};
    line-height: 0;
    border-radius: 12px;
    background-color: ${bg};
  `
  return <Base {...props} children={letter} />
}

export default Representative
