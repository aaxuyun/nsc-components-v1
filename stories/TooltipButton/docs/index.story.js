import React from 'react'
import TooltipButton from '../../../src/lib/components/TooltipButton'

import { storySettings } from './storySettings'
import CodeExample from 'wix-storybook-utils/CodeExample'
import TooltipButtonBasicExample from './ExampleBasicRaw'
import ExampleBasicRaw from '!raw-loader!./ExampleBasicRaw'

import { createAutoExampleWrapper } from '../../../stories/utils/AutoExampleWrapper'

const exampleContainerStyle = {
  display: 'flex',
  backgroundColor: '#f6f8fa',
  minHeight: '50px',
  alignItems: 'center',
  justifyContent: 'center',
}

const exampleItems = [
  <TooltipButton
    icon="edit" 
    tip="编辑"
    onClick={() => {}}
  />,
  <TooltipButton
    icon="delete" 
    tip="删除"
    onClick={() => {}}
  />,
  <TooltipButton
    icon="rollback"
    tip="还原"
    onClick={() => {}}
  />,
]

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: createAutoExampleWrapper(TooltipButton),
  componentPath: '../../../src/lib/components/TooltipButton',

  componentProps: {
    size: 'normal',
    placement: 'right',
    icon: 'edit',
  },

  examples: (
    <div>
      <CodeExample title="Standard with icons" code={ExampleBasicRaw}>
        <div style={exampleContainerStyle}>
        <TooltipButtonBasicExample/>,
        </div>
      </CodeExample>
    </div>
  ),
}

