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

const title = 'Fossil Funded'
const desc =
  'See if the fossil fuel industry is funding your Representative—and speak out.'
const url = 'https://fossilfunded.now.sh'
const icon = url + '/static/icon.png'

export default () => (
  <main>
    <Head>
      <meta charset="utf-8" />
      <title>
        Fossil Funded – How fossil fuel funding influences Congress
      </title>
      <meta name="description" content={desc} />
      <meta name="author" content="Lachlan Campbell" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={colors.red} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@lachlanjc" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={icon} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={icon} />
      <meta property="og:description" content={desc} />
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
      <Container py4>
        <Heading level={1} fontSize={2} mt0 mb2 white>
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
    <Container mt2>
      <Search />
      <Analysis />
    </Container>
    <Container is="footer" color={colors.slate} pt0 pb3>
      <Box borderTop borderColor={colors.smoke} width={1} mb2 />
      <Flex alignItems="center">
        <Text mr1>
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
        <Box
          is="img"
          src={`https://icon.now.sh/heart/16/${colors.red.slice(1)}`}
        />
      </Flex>
    </Container>
  </main>
)
