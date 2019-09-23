import React from 'react'

import  { TooltipButton }  from 'nsc-components'
import  { Tooltip,Button }  from 'antd'

export default class TooltipButtonBasicExample extends React.Component {
  render() {
    return (
        <TooltipButton
            tip='I am a tooltip!'
            icon='edit'  >
        </TooltipButton>
    )
  }
}
