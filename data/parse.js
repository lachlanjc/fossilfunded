const { map, find, deburr, sortBy, sample } = require('lodash')
const fs = require('fs')

const states = require('./states')
const people = require('./reps')
const funded = require('./funding')

// loop through states
// const data = map(states, state => {
// find the funded reps from this state
// const stateFunded = filter(funded, ['state', state.abbrev])
// loop through reps for this state
const list = sortBy(
  map(people, record => {
    const { party, website, phone, state } = record
    const fund = find(funded, { lastName: record.person.lastname, state })
    const funding = fund ? fund.funding : 0
    return {
      firstName: deburr(record.person.firstname),
      lastName: deburr(record.person.lastname),
      sortName: deburr(record.person.sortname),
      funding,
      party,
      state,
      // startDate: record.startdate,
      // endDate: record.enddate,
      address: record.extra.address,
      gender: record.person.gender,
      bioguideId: record.person.bioguideid,
      twitter: record.person.twitterid,
      website,
      phone
    }
  }),
  'sortName'
)
// return state
// })

fs.writeFile('./data/data.json', JSON.stringify(list), err => {
  if (err) {
    console.log(err)
  } else {
    console.log('✅ Parsed data – sample record:', JSON.stringify(sample(list)))
  }
})
