import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs } from '@storybook/addon-knobs'

import Readme from '../../README.md'

storiesOf('Introduction', module)
  .addDecorator(withKnobs)
  .add('Getting started',withReadme(Readme))

//TODO - add contribution docs links here somehow
