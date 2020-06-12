import React, { useState } from 'react'
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-bootstrap4'
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css'

import { generateRows, defaultColumnValues } from './generator'

const getRowId = (row) => row.id

export function DXReactGridTable() {
  const [columns] = useState([
    { name: 'id', title: 'ID' },
    { name: 'name', title: 'Name' },
    { name: 'gender', title: 'Gender' },
    { name: 'city', title: 'City' },
    { name: 'car', title: 'Car' },
  ])
  const [rows] = useState(
    generateRows({
      columnValues: { id: ({ index }) => index, ...defaultColumnValues },
      length: 100000,
    })
  )

  return (
    <div className="card">
      <Grid rows={rows} columns={columns} getRowId={getRowId}>
        <VirtualTable />
        <TableHeaderRow />
      </Grid>
    </div>
  )
}
