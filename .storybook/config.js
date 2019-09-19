import React from 'react';
import { configure,addDecorator } from "@storybook/react"
import { setOptions } from "@storybook/addon-options"
const req = require.context('../stories', true, /.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}


configure(loadStories, module)

setOptions({
  showAddonPanel: false,
  name: `nsc-components`,
  url: "https://github.com/aaxuyun/nsc-stories",
  sidebarAnimations: false
});