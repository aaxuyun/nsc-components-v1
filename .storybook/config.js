import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { create } from '@storybook/theming'
import { setOptions } from "@storybook/addon-options"
const req = require.context('../stories', true, /.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addParameters({
    options: {
        isFullScreen: false,
        showNav: true,
        showPanel: false,
        panelPosition: 'right',
        sortStoriesByKind: false,
        hierarchySeparator: /\/|\./,
        hierarchyRootSeparator: /\|/,
        sidebarAnimations: false,
        enableShortcuts: true,
        isToolshown: true,
        theme: create({
            base: 'light',
            brandTitle: 'nsc-components',
            brandUrl: 'https://github.com/aaxuyun/nsc-stories'
        })
    }
})
const storyWrapper = story => <div style={{ margin: 35 }}>{story()}</div>

addDecorator(storyWrapper)

configure(loadStories, module)

