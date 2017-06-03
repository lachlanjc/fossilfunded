// @flow
import React, { Component } from 'react'
import {
  trim,
  isEmpty,
  toNumber,
  map,
  join,
  keys,
  find,
  filter,
  last,
  words,
  upperCase,
  includes
} from 'lodash'

import { Box, Text } from 'axs'
import { Button, Flex, Input, Label } from 'axs-ui'
import { SectionHeading } from './ui'
import { bold, colors } from '../style'
import Spinner from 'respin'

import data from '../data/data'
import Representative, { BlankRepresentative } from './Representative'

class Search extends Component {
  state: {
    address: string,
    loading: boolean,
    rep: mixed
  }

  constructor(props: any) {
    super(props)
    this.state = {
      address: '',
      loading: false,
      rep: {}
    }
  }

  onKey(value: string, key: number) {
    const address = trim(value)
    this.setState({ address })
    if (key === 'Enter') this.fetchData()
  }

  fetchData() {
    const { address }: { address: string } = this.state
    this.setState({ loading: true, rep: {} })
    type Official = {
      name: string,
      address: Array<{
        line1: string,
        line2: string,
        city: string,
        state: string,
        zip: string
      }>,
      party: string,
      emails: Array<string>,
      phones: Array<string>,
      urls: Array<string>,
      photoUrl: string,
      channels: Array<{ type: string, id: string }>
    }
    const payload = {
      key: 'AIzaSyA3d1r7gbtK6Toz6XD4TG2LjZjOcamUm6M',
      address,
      fields: 'divisions,officials',
      includeOffices: true.toString()
    }
    const query = map(keys(payload), key =>
      join(map([key, payload[key]], encodeURIComponent), '=')
    )
    const keyMatch: Array<string> = (key: string) =>
      key.match(
        /ocd-division\/country:us\/(?:state|district):(\w+)(?:\/cd:)(\d+)/
      )
    const url = `https://www.googleapis.com/civicinfo/v2/representatives?${join(query, '&')}`
    fetch(url)
      .then(pipe => {
        return pipe.json()
      })
      .then((res: { divisions: Array<mixed>, officials: Array<Official> }) => {
        const divKey: string = find(keys(res.divisions), key => keyMatch(key))
        const state: string = upperCase(keyMatch(divKey)[1])
        const district: number = state === 'dc'
          ? 1
          : toNumber(divKey.match(/\d+$/)[0])

        const record: {
          name: string,
          officeIndices: Array<number>
        } =
          res.divisions[divKey]
        const official: Official = res.officials[record.officeIndices[0] + 1]
        console.log(official)

        if (state && district) {
          const lastName: string = last(words(official.name))
          const stateReps: Array<mixed> = filter(data, ['state', state])
          // console.log(stateReps, lastName)
          const rep: mixed = stateReps.find(r => includes(r.sortName, lastName))
          // rep.facebook = filter(official.channels, ['type', 'facebook']).id
          console.log(rep)
          this.setState({ loading: false, rep })
        }
      })
      .catch(e => {
        console.error(e)
      })
  }

  render() {
    const { loading, rep }: { loading: boolean, rep: mixed } = this.state
    return (
      <section>
        <SectionHeading>Find your Representative</SectionHeading>
        <Flex alignItems="flex-end" mb2>
          <Box pr2 flexAuto>
            <Label
              htmlFor="address"
              color={colors.steel}
              css={{ fontWeight: bold, marginBottom: 4 }}
              fontSize={4}
            >
              Enter your U.S. address
            </Label>
            <Input
              name="address"
              id="address"
              placeholder="1 Infinite Loop, Cupertino, CA"
              onKeyDown={e => this.onKey(e.target.value, e.key)}
              borderColor={colors.smoke}
              css={{ ':focus': { borderColor: colors.blue } }}
            />
          </Box>
          <Button
            bg={colors.orange}
            children={loading ? <Spinner /> : 'Search'}
            onClick={e => !isEmpty(address) && this.fetchData()}
            css={{
              fontWeight: 400,
              height: 36,
              lineHeight: loading ? 0 : 'initial',
              ':hover': { backgroundColor: colors.orange },
              ':focus': { backgroundColor: colors.orange }
            }}
          />
        </Flex>
        {isEmpty(rep) ? <BlankRepresentative /> : <Representative rep={rep} />}
      </section>
    )
  }
}

/*
const SearchResults = ({
  results
}: {
  results: Array<{
    bioguideId: number,
    title: string,
    firstName: string,
    lastName: string,
    state: string
  }>
}) => (
  <Box mt2>
    <Text fontSize={5} css={{ fontWeight: 600, marginBottom: 4 }}>
      Jump to a legislator
    </Text>
    <Box
      border
      borderColor={colors.smoke}
      py1
      rounded
      css={{ maxWidth: 16 * 16 }}
    >
      {map(results, r => (
        <SearchResult
          title={r.title}
          firstName={r.firstName}
          lastName={r.lastName}
          state={r.state}
          key={r.bioguideId}
        />
      ))}
    </Box>
  </Box>
)

const SearchResult = ({
  title,
  firstName,
  lastName,
  state
}: {
  title: string,
  firstName: string,
  lastName: string,
  state: string
}) => (
  <Text
    is="a"
    href={`#${state}-${lastName}`}
    px2
    py1
    display="block"
    css={{
      lineHeight: 1,
      textDecoration: 'none',
      color: 'inherit',
      cursor: 'pointer'
    }}
    children={`${title}. ${firstName} ${lastName}`}
  />
)
*/

export default Search
