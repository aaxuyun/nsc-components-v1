import React from 'react'
import { storiesOf } from '@storybook/react'

import Markdown from 'wix-storybook-utils/Markdown'

import Readme from '../../README.md'

storiesOf('Introduction', module)
  .add('Getting started', () => <Markdown source={Readme} />)

//TODO - add contribution docs links here somehow
