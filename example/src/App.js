import React, { Component } from 'react'

import NSC from 'nsc-components-v1'
const { TooltipButton,Page} =NSC 
export default class App extends Component {
  render () {
    return (
      <div>
      <TooltipButton tip='hi'/>
      <Page>hi</Page>
      </div> 
    )
  }
}
