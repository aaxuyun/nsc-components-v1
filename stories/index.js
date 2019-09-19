import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info'

import TooltipButton from './TooltipButton'

const stories = storiesOf('Atoms', module)

stories
    .addDecorator(withKnobs)
    .add('TooltipButton', withReadme(...TooltipButton))
