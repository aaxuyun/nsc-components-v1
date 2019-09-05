// import { configure } from '@storybook/react';
// //import { setOptions } from "@storybook/addon-options";

// function loadStories() {
//   require('../stories/index.stories.js');
// }

// configure(loadStories, module);

import { configure } from "@storybook/react"
import { setOptions } from "@storybook/addon-options"
import { version } from "../package.json"


function loadStories() {
  require("../stories");
}

configure(loadStories, module)

setOptions({
  showAddonPanel: false,
  name: `nsc-components`,
  url: "https://github.com/aaxuyun/nsc-stories",
  sidebarAnimations: false
});