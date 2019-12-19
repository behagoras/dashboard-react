{
  "processors": [["stylelint-processor-styled-components", {
    "moduleName": "styled-components",
    "importName": "default",
    "strict": false,
    "ignoreFiles": [],
    "parserPlugins": [
      "jsx",
      "objectRestSpread",
      ["decorators", { "decoratorsBeforeExport": true }],
      "classProperties",
      "exportExtensions",
      "asyncGenerators",
      "functionBind",
      "functionSent",
      "dynamicImport",
      "optionalCatchBinding",
      "optionalChaining"
    ],  
    "extends": [
        "stylelint-config-recommended",
        "stylelint-config-styled-components"
  ]
}