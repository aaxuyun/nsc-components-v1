import React from 'react';
import TooltipButton from '../../../src/lib/components/TooltipButton'
export default class TooltipButtonBasicExample extends React.Component {
  render() {
    return (
       <TooltipButton icon="edit" tip="编辑" size='normal' type='primary' onClick={() => {}}/>
    )
  }
}
