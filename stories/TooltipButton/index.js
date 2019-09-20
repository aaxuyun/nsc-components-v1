import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample'
import TooltipButtonBasicExample from './ExampleBasic'
import ExampleBasicRaw from  '!raw-loader!./ExampleBasic'
import readme from './README.md'

const exampleContainerStyle = {
    display: 'flex',
    backgroundColor: '#f6f8fa',
    minHeight: '50px',
    alignItems: 'center',
    justifyContent: 'center',
  }

const component = () => (
    <CodeExample title="Standard with icons" code={ExampleBasicRaw}>
        <div style={exampleContainerStyle}>
            <TooltipButtonBasicExample/>
        </div>
    </CodeExample>
)

export default [readme, component]
