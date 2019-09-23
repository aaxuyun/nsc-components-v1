module.exports = {
  "presets": [
    "@babel/react",
  ],
  "plugins": [
    "@babel/plugin-external-helpers",
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
  ]
}
