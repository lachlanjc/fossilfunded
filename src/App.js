// @flow
import React from 'react'

import basic from '../basic'
import {
  Provider,
  Banner,
  Border,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Subhead,
  Text
} from 'rebass'
import Analysis from './Analysis'
import Search from './Search'
import { colors } from '../style'

const Header = Banner.extend.attrs({ is: 'header', px: 2, py: 4 })`
  min-height: 50vh;
  box-shadow: inset 0 4rem 8rem 4rem rgba(0, 0, 0, 0.4);
`

const App = () => (
  <Provider
    theme={{
      space: [0, 8, 16, 32, 64, 128],
      fontSizes: [64, 48, 32, 24, 16, 14, 12],
      radius: 4,
      maxWidth: 32 * 16
    }}
    className={basic}
  >
    <Header backgroundImage="cover.jpg">
      <Heading f={1} mt={0} mb={2} color="white">
        Let’s take back Congress.
      </Heading>
      <Subhead f={3} my={0} color="white">
        Fossil fuel companies have run our Representatives for decades.
      </Subhead>
    </Header>
    <Container mt={3} px={2}>
      <Search />
      <Analysis />
    </Container>
    <Container is="footer" color={colors.slate} pb={3}>
      <Border top color={colors.smoke} w={1} mb={2} />
      <Flex justify="center" align="center" wrap>
        <Text mr={1}>
          A project by{' '}
          <Link href="https://lachlanjc.me" bold>
            @lachlanjc
          </Link>, 2017.
        </Text>
        <Image src={`https://icon.now.sh/heart/16/${colors.red.slice(1)}`} />
      </Flex>
      <Text f={5} color={colors.grey} my={0}>
        Data from the Center for Responsive Politics, 2016.
      </Text>
    </Container>
  </Provider>
)

export default App
