// @flow
import React from 'react'
import { lowerCase } from 'lodash'
import commaNumber from 'comma-number'

import { Box, Text } from 'axs'
import { Heading, Flex } from 'axs-ui'
import { bold, colors } from '../style'

import Contact from './Contact'

const Representative = ({
  rep
}: {
  rep: {
    bioguideId: string,
    firstName: string,
    lastName: string,
    sortName?: string,
    state: string,
    funding: number,
    party: string,
    address: string,
    gender: 'male' | 'female', // :(
    twitter: string,
    website: string,
    phone: string
  }
}) => (
  <Box rounded border borderColor={colors.smoke} bgWhite p={[2, 3]}>
    <Flex>
      <Box css={{ position: 'relative' }}>
        <Badge party={rep.party} css={{ position: 'absolute', left: 0 }} />
        <Avatar username={rep.twitter} />
      </Box>
      <Box ml2>
        <Heading level={2} fontSize={3} css={{ fontWeight: 500 }} mt0 mb1>
          {rep.firstName} {rep.lastName}
        </Heading>
        {rep.funding === 0
          ? <Text color={colors.grey}>No funding in 2016.</Text>
          : <Text color={colors.red}>
              Received <strong>${commaNumber(rep.funding)}</strong> in 2016
            </Text>}
      </Box>
    </Flex>
    <Contact
      twitter={rep.twitter}
      website={rep.website}
      phone={rep.phone}
      address={rep.address}
    />
  </Box>
)

const Circle = ({ size, ...props }: { size: number }) => (
  <Box
    bg={colors.slate}
    _css={{ borderRadius: '50%', width: size, height: size }}
    {...props}
  />
)

export const BlankRepresentative = () => (
  <Box
    rounded
    border
    borderColor={colors.grey}
    bgWhite
    p={[2, 3]}
    css={{ opacity: 0.25, pointerEvents: 'none' }}
  >
    <Flex>
      <Box css={{ position: 'relative' }}>
        <Circle
          size={24}
          bg={colors.black}
          css={{ position: 'absolute', left: 0 }}
        />
        <Circle size={72} />
      </Box>
      <Box flexAuto ml2>
        <Box width={2 / 3} bg={colors.slate} rounded css={{ height: 24 }} mb1 />
        <Box width={1 / 2} bg={colors.grey} rounded css={{ height: 16 }} />
      </Box>
    </Flex>
    <Contact
      css={{ filter: 'grayscale()' }}
      twitter="demo"
      website="demo"
      phone="555"
      address="demo"
    />
  </Box>
)

const Avatar = ({ username }: { username: string }) => (
  <Box
    is="img"
    src={`https://twitter.com/${username}/profile_image?size=original`}
    css={{
      borderRadius: '50%',
      width: 72,
      height: 72,
      objectFit: 'cover',
      objectPosition: 'center',
      flexShrink: 0
    }}
  />
)

const Badge = ({
  party,
  ...props
}: {
  party: 'Republican' | 'Democrat' | 'Independent'
}) => {
  const bg = { republican: 'red', democrat: 'blue', independent: 'grey' }[
    lowerCase(party)
  ]
  const letter = party.slice(0, 1)
  return (
    <Box
      fontSize={4}
      white
      bg={bg}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      _css={{
        lineHeight: 0,
        fontWeight: bold,
        width: 24,
        height: 24,
        borderRadius: 24
      }}
      {...props}
    >
      {letter}
    </Box>
  )
}

export default Representative
