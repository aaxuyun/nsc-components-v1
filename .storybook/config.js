import React from 'react';
import { configure,addDecorator } from "@storybook/react"
import { setOptions } from "@storybook/addon-options"
import { withInfo } from '@storybook/addon-info'

function loadStories() {
  require("../stories");
}
const storyWrapper = story => <div style={{ margin: 35 }}>{story()}</div>;

addDecorator(
    withInfo({
        inline: true,
        header: false,
        source: true,
        maxPropsIntoLine: 1
    })
);

addDecorator(storyWrapper);

configure(loadStories, module)

setOptions({
  showAddonPanel: false,
  name: `nsc-components`,
  url: "https://github.com/aaxuyun/nsc-stories",
  sidebarAnimations: false
});