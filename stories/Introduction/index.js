import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs } from '@storybook/addon-knobs'

import Readme from '../../README.md'

import Markdown from 'wix-storybook-utils/Markdown'

storiesOf('Introduction', module)
  .add('Getting started', () => <Markdown source={Readme} />)
