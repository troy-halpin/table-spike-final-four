import React from 'react'
import ReactDataGrid from 'react-data-grid'
import { Link, Font, Notation } from '@procore/core-react'

import createRowData from './createRowData'

const COLUMN_WIDTH = 140

const TitleFormatter = ({ value }) => {
  return <Font>{value}</Font>
}

const FirstNameFormatter = ({ value }) => {
  return <Notation>{value}</Notation>
}

const LastNameFormatter = ({ value }) => {
  return <Link>{value}</Link>
}

const columns = [
  {
    key: 'id',
    name: 'ID',
    frozen: true,
    width: COLUMN_WIDTH,
  },
  {
    key: 'title',
    name: 'Title',
    frozen: true,
    width: COLUMN_WIDTH,
    formatter: TitleFormatter,
  },
  {
    key: 'firstName',
    name: 'First Name',
    frozen: true,
    width: COLUMN_WIDTH,
    formatter: FirstNameFormatter,
  },
  {
    key: 'lastName',
    name: 'Last Name',
    frozen: true,
    width: COLUMN_WIDTH,
    formatter: LastNameFormatter,
  },
  {
    key: 'email',
    name: 'Email',
    width: COLUMN_WIDTH,
  },
  {
    key: 'street',
    name: 'Street',
    width: COLUMN_WIDTH,
  },
  {
    key: 'zipCode',
    name: 'ZipCode',
    width: COLUMN_WIDTH,
  },
  {
    key: 'date',
    name: 'Date',
    width: COLUMN_WIDTH,
  },
  {
    key: 'bs',
    name: 'bs',
    width: COLUMN_WIDTH,
  },
  {
    key: 'catchPhrase',
    name: 'Catch Phrase',
    width: COLUMN_WIDTH,
  },
  {
    key: 'companyName',
    name: 'Company Name',
    width: COLUMN_WIDTH,
  },
  {
    key: 'sentence',
    name: 'Sentence',
    width: COLUMN_WIDTH,
  },
]

const ROW_COUNT = 1000
const rows = createRowData(ROW_COUNT)

export function ReactDataGridTable() {
  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={(i) => rows[i]}
      rowsCount={ROW_COUNT}
      minHeight={600}
    />
  )
}
