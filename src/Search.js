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
import fetch from 'unfetch'

import { Box, Text, Button, Flex, Input, Label } from 'rebass'
import { SectionHeading } from './ui'
import { bold, colors } from '../style'
import Spinner from 'respin'

import data from '../data/data'
import Representative, { BlankRepresentative } from './Representative'

type STATE = {
  address: string,
  loading: boolean,
  rep: mixed
}

class Search extends Component {
  state: STATE

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
      key: 'AIzaSyAC098ZQK-jP_Q5fRpG_0of9LCTvOtdEFA',
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
    const url = `https://www.googleapis.com/civicinfo/v2/representatives?${join(
      query,
      '&'
    )}`
    fetch(url)
      .then(pipe => {
        return pipe.json()
      })
      .then((res: { divisions: Array<mixed>, officials: Array<Official> }) => {
        const divKey: string = find(keys(res.divisions), key => keyMatch(key))
        const state: string = upperCase(keyMatch(divKey)[1])
        const district: number =
          state === 'dc' ? 1 : toNumber(divKey.match(/\d+$/)[0])

        const record: {
          name: string,
          officeIndices: Array<number>
        } =
          res.divisions[divKey]
        const official: Official = res.officials[record.officeIndices[0] + 1]
        console.log(official)

        if (state && district) {
          const lastName: string = last(words(official.name))
          const stateReps: Array<any> = filter(data, ['state', state])
          // console.log(stateReps, lastName)
          const rep: any = stateReps.find(r => includes(r.sortName, lastName))
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
    const { loading, address, rep }: STATE = this.state
    return (
      <section>
        <SectionHeading>Find your Representative</SectionHeading>
        <Flex align="flex-end" mb={2}>
          <Box pr={2} style={{ flex: '1 1 auto' }}>
            <Label
              htmlFor="address"
              color={colors.steel}
              style={{ fontWeight: bold, marginBottom: 4 }}
              f={4}
            >
              Enter your U.S. address
            </Label>
            <Searcher
              name="address"
              id="address"
              placeholder="1 Infinite Loop, Cupertino, CA"
              onChange={e => this.onKey(e.target.value, e.key)}
            />
          </Box>
          <LoadingButton
            children={loading ? <Spinner /> : 'Search'}
            onClick={e => !isEmpty(trim(address)) && this.fetchData()}
            py={loading ? 0 : 2}
            px={1}
          />
        </Flex>
        {isEmpty(rep) ? <BlankRepresentative /> : <Representative rep={rep} />}
      </section>
    )
  }
}

const Searcher = Input.extend`
  height: 36px;
  border-color: ${colors.smoke};
  &:focus {
    border-color: ${colors.blue};
  }
`

const LoadingButton = Button.extend.attrs({ bg: colors.red, f: 4 })`
  font-weight: 400;
  height: 36px;
  line-height: 0;
`

export default Search
