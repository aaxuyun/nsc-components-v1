import React from 'react'
import { storiesOf } from '@storybook/react'
import Markdown from 'wix-storybook-utils/Markdown'
import CodeExample from 'wix-storybook-utils/CodeExample'

import { storySettings } from './storySettings'
import TooltipButtonBasicExample from './ExampleBasicRaw'
import ExampleBasicRaw from '!raw-loader!./ExampleBasicRaw'

import { createAutoExampleWrapper } from '../../utils/AutoExampleWrapper'

storiesOf(storySettings.category, module).add(storySettings.storyName, () => (
  <div>

    <CodeExample title="Basic Example" code={ExampleBasicRaw}>
      <TooltipButtonBasicExample />
    </CodeExample>
  </div>
))