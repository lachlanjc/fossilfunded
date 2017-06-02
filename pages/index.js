// @flow
import React from 'react'
import Head from 'next/head'

import { Container } from '../components/ui'
import Analysis from '../components/Analysis'
import Search from '../components/Search'

import { Box, Text } from 'axs'
import { Heading, Flex } from 'axs-ui'
import { colors } from '../style'
require('../basic')

export default () => (
  <main>
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>
        Fossil Funded – How fossil fuel funding influences Congress
      </title>
      <meta
        name="description"
        content="See if the fossil fuel industry is funding your Representative—and speak out."
      />
      <meta name="author" content="Lachlan Campbell" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={colors.red} />
    </Head>
    <Box
      is="header"
      white
      css={{
        backgroundImage: 'url("/static/cover.jpg")',
        backgroundBlendMode: 'screen',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Container>
        <Heading level={1} fontSize={2} mt0 mb2 white caps>
          Fossil Funded
        </Heading>
        <Text my2>
          Many of our U.S. Representatives are receiving funding from
          the fossil fuel industry and are keeping quiet about climate change.
        </Text>
        <Text bold>
          See if your Representative is being funded.
        </Text>
        <Text fontSize={6} color={colors.snow} mt2>
          Data from the Center for Responsive Politics, 2016.
        </Text>
      </Container>
    </Box>
    <Container py3>
      <Search />
      <Analysis />
      {/*
      <Box
        border
        borderColor={colors.orange}
        py1
        px2
        display="inline-block"
        fontSize={5}
        color={colors.orange}
        css={{ borderRadius: 64, fontWeight: 500, cursor: 'not-allowed' }}
      >
        See all Representatives →
      </Box>
      */}
    </Container>
    <Container is="footer" color={colors.slate} pt0 pb3>
      <Box borderTop borderColor={colors.smoke} width={1} mb2 />
      <Text>
        A project by{' '}
        <Text
          is="a"
          href="https://lachlanjc.me"
          color={colors.blue}
          css={{ textDecoration: 'none' }}
        >
          @lachlanjc
        </Text>, 2017.
      </Text>
    </Container>
  </main>
)
