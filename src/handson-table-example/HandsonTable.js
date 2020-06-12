import React from 'react'
import Handsontable from 'handsontable'
import { HotTable, HotColumn } from '@handsontable/react'
import { Font } from '@procore/core-react'

import 'handsontable/dist/handsontable.min.css'

function RendererComponent(props) {
  // The avaiable renderer-related props are:
  // - row (row index)
  // - col (column index)
  // - prop (column property name)
  // - TD (the HTML cell element)
  // - cellProperties (the cellProperties object for the edited cell)
  return (
    <Font>
      <Font variant="secondary">
        Row: {props.row}, column: {props.col},
      </Font>{' '}
      value: {props.value}
    </Font>
  )
}

export class HandsonTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hotSettings: {
        colHeaders: true,
        data: Handsontable.helper.createSpreadsheetData(1000, 10),
        licenseKey: 'non-commercial-and-evaluation',
      },
    }
  }

  render() {
    return (
      <HotTable settings={this.state.hotSettings}>
        <HotColumn width={250}>
          <RendererComponent hot-renderer />
        </HotColumn>
        <HotColumn width={250}>
          <RendererComponent hot-renderer />
        </HotColumn>
        <HotColumn width={250}>
          <RendererComponent hot-renderer />
        </HotColumn>
      </HotTable>
    )
  }
}
