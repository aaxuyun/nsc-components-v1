import React from 'react';
import { text, object } from '@storybook/addon-knobs';
import TooltipButton from '../../src/lib/components/TooltipButton'
import readme from './README.md';

const component = () => (
    <TooltipButton
        tip={text('tip', 'I am a tooltip!')}
        icon={text('icon', 'edit')}>   
    </TooltipButton>
);

export default [readme, component];
