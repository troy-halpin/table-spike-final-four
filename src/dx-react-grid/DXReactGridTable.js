import React, { useState } from 'react'
import { Font } from '@procore/core-react'
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-bootstrap4'
import { DataTypeProvider } from '@devexpress/dx-react-grid'
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css'

import { generateRows, defaultColumnValues } from './generator'

const CityFormatter = ({ value }) => <Font weight="bold">{value}</Font>

const CityTypeProvider = (props) => (
  <DataTypeProvider formatterComponent={CityFormatter} {...props} />
)

const getRowId = (row) => row.id

export function DXReactGridTable() {
  const [columns] = useState([
    { name: 'id', title: 'ID' },
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ])

  const [cityColumns] = React.useState(['city'])

  const [rows] = useState(
    generateRows({
      columnValues: { id: ({ index }) => index, ...defaultColumnValues },
      length: 100000,
    })
  )

  return (
    <div className="card">
      <Grid rows={rows} columns={columns} getRowId={getRowId}>
        <CityTypeProvider for={cityColumns} />
        <VirtualTable />
        <TableHeaderRow />
      </Grid>
    </div>
  )
}
