const {
  forEach,
  filter,
  values,
  mapValues,
  round,
  sum,
  max
} = require('lodash')
const people = require('./data.json')
const fs = require('fs')

const funds = values(mapValues(people, 'funding'))

const fundedPeople = filter(people, p => p.funding > 0)
console.log(
  `People: ${people.length}; Funds: ${funds.length}; Funded people: ${fundedPeople.length};`
)

const republicans = filter(people, ['party', 'Republican'])
const republicansFunded = filter(fundedPeople, ['party', 'Republican'])
const males = filter(people, ['gender', 'male'])
const malesFunded = filter(fundedPeople, ['gender', 'male'])

const percentages = {
  republicans: {
    value: republicans.length / people.length
  },
  republicansFunded: {
    value: republicansFunded.length / fundedPeople.length
  },
  males: {
    value: males.length / people.length
  },
  malesFunded: {
    value: malesFunded.length / fundedPeople.length
  }
}

forEach(percentages, (data, key) => {
  percentages[key].label = `${round(data.value * 100, 1)}%`
  console.log(`${key}:`, `${round(data.value * 100, 1)}%`)
})

const summary = {
  total: sum(funds),
  max: max(funds)
}

const result = JSON.stringify({ percentages, summary })

fs.writeFile('./data/analysis.json', result, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('✅ Saved percentages')
  }
})
