const { filter, map, range, head, tail, concat } = require('lodash')
const fs = require('fs')
const axios = require('axios')
const scrapeIt = require('scrape-it')
const unFormatUSD = require('unformat-usd')

// PEOPLE
axios
  .get('https://www.govtrack.us/api/v2/role?current=true&limit=541')
  .then(res => {
    const { objects } = res.data
    const reps = filter(objects, ['role_type', 'representative'])
    fs.writeFile('./data/reps.json', JSON.stringify(reps), err => {
      if (err) {
        console.log(err)
      } else {
        console.log(`✅ Saved ${reps.length} representatives`)
      }
    })
  })

// FUNDING
const pages = map(
  range(1, 5),
  i =>
    `https://www.opensecrets.org/industries/summary.php?ind=E01&cycle=2016&recipdetail=H&sortorder=A&mem=Y&page=${i}`
)
let data = []

const firstName = s => s.match(/^.+, (.+) \(/)
const lastName = s => s.match(/^(.+), .+ \(/)
const state = s => s.match(/[RDI]-(\w{2})/)

const match = (s, matcher) => (matcher(s) ? matcher(s)[1] : '')

map(pages, url => {
  scrapeIt(url, {
    recips: {
      listItem: 'tr',
      data: {
        firstName: {
          selector: 'td:first-child',
          convert: s => match(s, firstName)
        },
        lastName: {
          selector: 'td:first-child',
          convert: s => match(s, lastName)
        },
        state: {
          selector: 'td:first-child',
          convert: s => match(s, state)
        },
        funding: {
          selector: 'td.number',
          convert: d => unFormatUSD(d)
        }
      }
    }
  }).then(page => {
    const recips = tail(page.recips)
    data = concat(data, recips)
    fs.writeFile('./data/funding.json', JSON.stringify(data), err => {
      if (err) {
        console.log(err)
      } else {
        const i = url.substr(url.length - 1)
        console.log(
          `✅ Saved ${recips.length} people from page ${i} – first record:`,
          JSON.stringify(head(recips))
        )
      }
    })
  })
})
