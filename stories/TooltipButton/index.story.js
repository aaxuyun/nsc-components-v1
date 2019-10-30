import React from 'react'
import  { TooltipButton }  from 'nsc-components'
import { TooltipButtonExample } from './index'
export default {
  category: 'component',
  storyName: 'TooltipButton',
  component: TooltipButton,
  componentPath: '../../src/lib/components/TooltipButton.js',
  componentProps:  {
    placement: 'right',
    tip: '基础',
    icon:'edit'
  },
  examples:TooltipButtonExample
}
