const femaleFirstNames = [
  'Mary',
  'Linda',
  'Barbara',
  'Maria',
  'Lisa',
  'Nancy',
  'Betty',
  'Sandra',
  'Sharon',
]
const maleFirstNames = [
  'James',
  'John',
  'Robert',
  'William',
  'David',
  'Richard',
  'Thomas',
  'Paul',
  'Mark',
]

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Las Vegas',
  'Austin',
  'Tokyo',
  'Rio de Janeiro',
  'London',
  'Paris',
]
const cars = [
  'Honda Civic',
  'Toyota Corolla',
  'Chevrolet Cruze',
  'Honda Accord',
  'Nissan Altima',
  'Kia Optima',
  'Audi A4',
  'BMW 750',
]

export const defaultColumnValues = {
  gender: ['Male', 'Female'],
  name: [
    'gender',
    {
      Male: maleFirstNames,
      Female: femaleFirstNames,
    },
  ],
  city: cities,
  car: cars,
}

export function generateRows({
  columnValues = defaultColumnValues,
  length,
  random = 2,
}) {
  const data = []
  const columns = Object.keys(columnValues)

  for (let i = 0; i < length; i += 1) {
    const record = {}

    columns.forEach((column) => {
      let values = columnValues[column]

      if (typeof values === 'function') {
        record[column] = values({ random, index: i, record })
        return
      }

      while (values.length === 2 && typeof values[1] === 'object') {
        values = values[1][record[values[0]]]
      }

      const value = values[Math.floor(Math.random() * values.length)]
      if (typeof value === 'object') {
        record[column] = { ...value }
      } else {
        record[column] = value
      }
    })

    data.push(record)
  }

  return data
}
