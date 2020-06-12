import React from 'react'
import { ReactDataGridTable } from './react-data-grid-example/ReactDataGridTable'
import { ReactBaseTable } from './react-base-table-example/ReactBaseTable'
import { HandsonTable } from './handson-table-example/HandsonTable'
import { DXReactGridTable } from './dx-react-grid/DXReactGridTable'

import './App.css'

function App() {
  const [table, setTable] = React.useState(1)
  return (
    <div className="App">
      <div className="table-switcher">
        <button className="button" onClick={() => setTable(1)}>
          React Data Grid
        </button>
        <button className="button" onClick={() => setTable(2)}>
          React Base Table
        </button>
        <button className="button" onClick={() => setTable(3)}>
          Handson Table
        </button>
        <button className="button" onClick={() => setTable(4)}>
          DX React Grid Table
        </button>
      </div>
      {table === 1 && <ReactDataGridTable />}
      {table === 2 && <ReactBaseTable />}
      {table === 3 && <HandsonTable />}
      {table === 4 && <DXReactGridTable />}
    </div>
  )
}

export default App
