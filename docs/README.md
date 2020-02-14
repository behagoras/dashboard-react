## React Dropdown Tree Select

A lightweight and fast control to render a select component that can display hierarchical tree data. In addition, the control shows the selection in pills and allows user to search the options for quick filtering and selection. Also supports displaying partially selected nodes.

## Table of Contents

- [Screenshot](#screenshot)
- [Demo](#example)
  - [Vanilla (no framework)](#vanilla-no-framework)
  - [With Bootstrap](#with-bootstrap)
  - [With Material Design](#with-material-design)
  - [As Single Select](#as-single-select)
- [Install](#install)
  - [As NPM package](#as-npm-package)
  - [Using a CDN](#using-a-cdn)
  - [Peer Dependencies](#peer-dependencies)
- [Usage](#usage)
- [Props](#props)
  - [className](#classname)
  - [clearSearchOnChange](#clearsearchonchange)
  - [onChange](#onchange)
  - [onNodeToggle](#onnodetoggle)
  - [data](#data)
  - [texts](#texts)
  - [keepTreeOnSearch](#keeptreeonsearch)
  - [keepChildrenOnSearch](#keepchildrenonsearch)
  - [keepOpenOnSelect](#keepopenonselect)
  - [mode](#mode)
    - [multiSelect](#multiSelect)
    - [hierarchical](#hierarchical)
    - [simpleSelect](#simpleSelect)
    - [radioSelect](#radioSelect)
  - [showPartiallySelected](#showpartiallyselected)
  - [showDropdown](#showDropdown)
    - [initial](#initial)
    - [always](#always)
  - [form states (disabled|readOnly)](#formstates)
  - [id](#id)
  - [searchPredicate](#searchpredicate)
- [Styling and Customization](#styling-and-customization)
  - [Using default styles](#default-styles)
  - [Customizing with Bootstrap, Material Design styles](#customizing-styles)
- [Performance](#performance)
  - [Search optimizations](#search-optimizations)
  - [Search debouncing](#search-debouncing)
  - [Virtualized rendering](#virtualized-rendering)
  - [Reducing costly DOM manipulations](#reducing-costly-dom-manipulations)
- [Keyboard navigation](#keyboard-navigation)
- [FAQ](#faq)
- [Doing more with HOCs](/docs/HOC.md)
- [Development](#development)
- [License](#license)

## Screenshot

![animated demo screenshot](https://user-images.githubusercontent.com/781818/37562235-0ae9e9ec-2a3a-11e8-8266-b0e6b716d0d1.gif)

## Demo

##### Vanilla, no framework

Online demo: https://dowjones.github.io/react-dropdown-tree-select/#/story/with-vanilla-styles

##### With Bootstrap

Online demo: https://dowjones.github.io/react-dropdown-tree-select/#/story/with-bootstrap-styles

##### With Material Design

Online demo: https://dowjones.github.io/react-dropdown-tree-select/#/story/with-material-design-styles

##### As Single Select

Online demo: https://dowjones.github.io/react-dropdown-tree-select/#/story/simple-select

## Install

### As NPM package

```js
npm i react-dropdown-tree-select

// or if using yarn
yarn add react-dropdown-tree-select
```

### Using a CDN

You can import the standalone UMD build from a CDN such as:

```html
<script src="https://unpkg.com/react-dropdown-tree-select/dist/react-dropdown-tree-select.js"></script>
<link href="https://unpkg.com/react-dropdown-tree-select/dist/styles.css" rel="stylesheet" />
```

**Note:** Above example will always fetch the latest version. To fetch a specific version, use `https://unpkg.com/react-dropdown-tree-select@<version>/dist/...`
Visit [unpkg.com](https://unpkg.com/#/) to see other options.

### Peer Dependencies

In order to avoid version conflicts in your project, you must specify and install [react](https://www.npmjs.com/package/react), [react-dom](https://www.npmjs.com/package/react-dom) as [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/). Note that NPM doesn't install peer dependencies automatically. Instead it will show you a warning message with instructions on how to install them.

If you're using the UMD builds, you'd also need to install the peer dependencies in your application:

```html
<script src="https://unpkg.com/react/dist/react.js"></script>
<script src="https://unpkg.com/react-dom/dist/react-dom.js"></script>
```

## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'

const data = {
  label: 'search me',
  value: 'searchme',
  children: [
    {
      label: 'search me too',
      value: 'searchmetoo',
      children: [
        {
          label: 'No one can get me',
          value: 'anonymous',
        },
      ],
    },
  ],
}

const onChange = (currentNode, selectedNodes) => {
  console.log('onChange::', currentNode, selectedNodes)
}
const onAction = (node, action) => {
  console.log('onAction::', action, node)
}
const onNodeToggle = currentNode => {
  console.log('onNodeToggle::', currentNode)
}

ReactDOM.render(
  <DropdownTreeSelect data={data} onChange={onChange} onAction={onAction} onNodeToggle={onNodeToggle} />,
  document.body
) // in real world, you'd want to render to an element, instead of body.
```

## Props

### className

Type: `string`

Additional classname for container. The container renders with a default classname of `react-dropdown-tree-select`.

### clearSearchOnChange

Type: `bool`

Clear the input search if a node has been selected/unselected.

### onChange

Type: `function`

Fires when a node change event occurs. Currently the following actions trigger a node change:

- Checkbox click which checks/unchecks the item
- Closing of pill (which unchecks the corresponding checkbox item)

Calls the handler with the current node object and all selected nodes (if any). Example:

```jsx
function onChange(currentNode, selectedNodes) {
  // currentNode: { label, value, children, expanded, checked, className, ...extraProps }
  // selectedNodes: [{ label, value, children, expanded, checked, className, ...extraProps }]
}

return <DropdownTreeSelect data={data} onChange={onChange} />
```

### onNodeToggle

Type: `function`

Fires when a node is expanded or collapsed.

Calls the handler with the current node object. Example:

```jsx
function onNodeToggle(currentNode) {
  // currentNode: { label, value, children, expanded, checked, className, ...extraProps }
}

return <DropdownTreeSelect data={data} onNodeToggle={onNodeToggle} />
```

### onAction

Type: `function`

Fires when a action is triggered. Example:

```jsx
function onAction(node, action) {
  console.log('onAction::', action, node)
}

return <DropdownTreeSelect data={data} onAction={onAction} />
```

### onFocus

Type: `function`

Fires when input box receives focus or the dropdown arrow is clicked. This is helpful for setting `dirty` or `touched` flags with forms.

### onBlur

Type: `function`

Fires when input box loses focus or the dropdown arrow is clicked again (and the dropdown collapses). This is helpful for setting `dirty` or `touched` flags with forms.

### data

Type: `Object` or `Array`

Data for rendering the tree select items. The object requires the following structure:

```js
{
  label,          // required: Checkbox label
  value,          // required: Checkbox value
  children,       // optional: Array of child objects
  checked,        // optional: Initial state of checkbox. if true, checkbox is selected and corresponding pill is rendered.
  disabled,       // optional: Selectable state of checkbox. if true, the checkbox is disabled and the node is not selectable.
  expanded,       // optional: If true, the node is expanded (children of children nodes are not expanded by default unless children nodes also have expanded: true).
  className,      // optional: Additional css class for the node. This is helpful to style the nodes your way
  tagClassName,   // optional: Css class for the corresponding tag. Use this to add custom style the pill corresponding to the node.
  actions,        // optional: An array of extra action on the node (such as displaying an info icon or any custom icons/elements)
  dataset,        // optional: Allows data-* attributes to be set on the node and tag elements
  isDefaultValue, // optional: Indicate if a node is a default value. When true, the dropdown will automatically select the node(s) when there is no other selected node. Can be used on more than one node.
  ...             // optional: Any extra properties that you'd like to receive during `onChange` event
}
```

The `action` object requires the following structure:

```js
{
  className, // required: CSS class for the node. e.g. `fa fa-info`
  title,     // optional: HTML tooltip text
  text,      // optional: Any text to be displayed. This is helpful to pass ligatures if you're using ligature fonts
  ...        // optional: Any extra properties that you'd like to receive during `onChange` event
}
```

An array renders a tree with multiple root level items whereas an object renders a tree with a single root element (e.g. a `Select All` root node).

### texts

Texts to override various labels, place holders & messages used in the component. You can also use this to provide translated messages.

The `texts` object requires the following structure:

```js
{
  placeholder,  // optional: The text to display as placeholder on the search box. Defaults to `Choose...`
  noMatches,    // optional: The text to display when the search does not find results in the content list. Defaults to `No matches found`
  label,        // optional: Adds `aria-labelledby` to search input when input starts with `#`, adds `aria-label` to search input when label has value (not containing '#')
  labelRemove,  // optional: The text to display for `aria-label` on tag delete buttons which is combined with `aria-labelledby` pointing to the node label. Defaults to `Remove`
}
```

### keepTreeOnSearch

Type: `bool`

Displays search results as a tree instead of flattened results

### keepChildrenOnSearch

Type: `bool`

Displays children of found nodes to allow searching for a parent node on then selecting any child node of the found node. Defaults to `false`

_NOTE_ this works only in combination with `keepTreeOnSearch`

### keepOpenOnSelect

Type: `bool` (default: 'false')

Keeps single selects open after selection. Defaults to `false`

_NOTE_ this works only in combination with `simpleSelect` or `radioSelect`

### mode

Type: `string` (default: `multiSelect`)

Defines how the dropdown is rendered / behaves

#### multiSelect

A multi selectable dropdown which supports tree data with parent-child relationships. This is the default mode.

#### hierarchical

A multi selectable dropdown which supports tree data **without** parent-child relationships. In this mode, selecting a node has no ripple effects on its descendants or ancestors. Subsequently, `showPartiallySelected` becomes a moot flag and has no effect as well.

⚠️ Note that `hierarchical=true` negates/overrides `showPartiallySelected`.

#### simpleSelect

Turns the dropdown into a simple, single select dropdown. If you pass tree data, only immediate children are picked, grandchildren nodes are ignored.

⚠️ If multiple nodes in data are selected - by setting either `checked` or `isDefaultValue`, only the first visited node stays selected.

#### radioSelect

Turns the dropdown into radio select dropdown.

Like `simpleSelect`, you can only select one value; but keeps the tree/children structure.

⚠️ If multiple nodes in data are selected - by setting either `checked` or `isDefaultValue`, only the first visited node stays selected.

### showPartiallySelected

Type: `bool` (default: `false`)

If set to true, shows checkboxes in a partial state when one, but not all of their children are selected. Allows styling of partially selected nodes as well, by using [:indeterminate](https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate) pseudo class. Simply add desired styles to `.node.partial .checkbox-item:indeterminate { ... }` in your CSS.

### showDropdown

Type: `string`

Let's you choose the rendered state of the dropdown.

#### initial

`showDropdown: initial` shows the dropdown when rendered. This can be used to render the component with the dropdown open as its initial state.

#### always

`showDropdown: always` shows the dropdown when rendered, and keeps it visible at all times. Toggling dropdown is disabled.

### form states (disabled|readOnly)

Type: `bool` (default: `false`)

`disabled=true` disables the dropdown completely. This is useful during form submit events.
`readOnly=true` makes the dropdown read only, which means that the user can still interact with it but cannot change any of its values. This can be useful for display only forms.

### id

Type: `string`

Specific id for container. The container renders with a default id of `rdtsN` where N is the count of the current component rendered.

Use to ensure a own unique id when a simple counter is not sufficient, e.g in a partial server render (SSR)

### searchPredicate

Type: `function`

Optional search predicate to override the default case insensitive contains match on node labels. Example:

```jsx
function searchPredicate(node, searchTerm) {
  return node.customData && node.customData.toLower().indexOf(searchTerm) >= 0
}

return <DropdownTreeSelect data={data} searchPredicate={searchPredicate} />
```

## Styling and Customization

### Default styles

The component brings minimal styles for bare-bones functional rendering. It is kept purposefully minimal so that user can style/customize it completely to suit their needs.

#### Using WebPack

If you're using a bundler like WebPack, make sure you configure WebPack to import the default styles. To do so, simply add this rule to your WebPack config:

```js
// allow WebPack to import/bundle styles from node_modules for this component
module: {
  rules: [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
          },
        ],
      }),
      include: /node_modules[/\\]react-dropdown-tree-select/,
    },
  ]
}
```

#### Using a CDN

You can import and place a style link directly by referencing it from a CDN.

```html
<link href="https://unpkg.com/react-dropdown-tree-select/dist/styles.css" rel="stylesheet" />
```

Note: Above example will always fetch the latest version. To fetch a specific version, use `https://unpkg.com/react-dropdown-tree-select@<version>/dist/styles.css`. Visit [unpkg.com](https://unpkg.com/#/) to see other options.

#### Using with other bundlers

You can reference the files from `node_modules/react-dropdown-tree-select/dist/styles.css` to include in your own bundle via gulp or any other bundlers you have.

### Customizing styles

Once you import default styles, it is easy to add/override the provided styles to match popular frameworks. Checkout `/docs` folder for some examples.

- [With Bootstrap](/docs/examples/bootstrap)
- [With Material Design ](/docs/examples/material)

## Keyboard navigation

Adds navigation with `arrow` keys, `page down/up` / `home/end` and toggle of selection with `enter`. `Arrow/page up/down` also toggles open of dropdown if closed.

To close open dropdown `escape` or `tab` can be used and `backspace` can be used for deletion of tags on empty search input.

## Performance

### Search optimizations

- The tree creates a flat list of nodes from hierarchical tree data to perform searches that are linear in time irrespective of the tree depth or size.
- It also memoizes each search term, so subsequent searches are instantaneous (almost).
- Last but not the least, the search employs progressive filtering technique where subsequent searches are performed on the previous search set. E.g., say the tree has 4000 nodes altogether and the user wants to filter nodes that contain the text: "2002". As the user enters each key press the search goes like this:

```
key press  : 2-----20-----200-----2002
            |     |      |       |
search set: 967   834    49      7
```

The search for "20" happens against the previously matched set of 967 as opposed to all 4000 nodes; "200" happens against 834 nodes and so on.

### Search debouncing

The tree debounces key presses to avoid costly search calculations. The default duration is 100ms.

### Virtualized rendering

The dropdown renders only visible content and skips any nodes that are going to hidden from the user. E.g., if a parent node is not expanded, there is no point in rendering children since they will not be visible anyway.

~~Planned feature: Use [react-virtualized](https://github.com/bvaughn/react-virtualized) to take this to the next level.~~ The search tree now uses infinite scroll, limiting search results to 100 items initially (more load seamlessly as you scroll) - this results in super fast rendering even with large number of nodes (see [#80](https://github.com/dowjones/react-dropdown-tree-select/issues/80)).

### Reducing costly DOM manipulations

The tree tries to minimize the DOM manipulations as much as possible. E.g., during searching, the non-matching nodes are simply `hidden` and css adjusted on remaining to create the perception of a new filtered list.
Node toggling also achieves the expand/collapse effect by manipulating css classes instead of creating new tree with filtered out nodes.

## FAQ

### How do I change the placeholder text?

The default [placeholder](#texts) is `Choose...`. If you want to change this to something else, you can use `placeholder` property to set it.

```jsx
<DropdownTreeSelect texts={{ placeholder: 'Search' }} />
```

### How do I tweak styles?

Easy style customization is one of the design goals of this component. Every visual aspect of this dropdown can be tweaked without going through extensive hacks. E.g., to change how disabled nodes appear:

```css
.node .fa-ban {
  color: #ccc;
}
```

The css classes needed to override can be found by inspecting the component via developer tools (Chrome/Safari/IE/Edge/Firefox). You can also inspect the [source code](/src) or look in [examples](/docs/index.css).

### I do not want the default styles, do I need to fork the project?

Absolutely not! Simply do not import the styles (WebPack) or include it in your html (link tags). Roughly, this is the HTML/CSS skeleton rendered by the component:

```pug
div.react-dropdown-tree-select
  div.dropdown
    a.dropdown-trigger
      span
    ul.tag-list
      li.tag-item
        input
    div.dropdown-content
      ul.root
        li.node.tree
          i.toggle.collapsed
          label
            input.checkbox-item
              span.node-label
```

Write your own styles from scratch or copy [existing styles](https://github.com/search?utf8=%E2%9C%93&q=repo%3Adowjones%2Freact-dropdown-tree-select+language%3ACSS+path%3A%2Fsrc&type=Code&ref=advsearch&l=CSS&l=) and tweak them.
Then include your own custom styles in your project.

:bulb: Pro tip: Leverage [node's](#data) `className`, `tagClassName` or [action's](#data) `className` prop to emit your own class name. Then override/add css propeties in your class. Remember that last person wins in CSS (unless specificity or `!important` is involved). Often times, this may suffice and may be easier then writing all the styles from the ground up.

If you believe this aspect can be improved further, feel free to raise an issue.

### My question is not listed here

Find more questions and their answers in the [issue tracker](https://github.com/dowjones/react-dropdown-tree-select/issues?utf8=%E2%9C%93&q=%20label%3Aquestion%20). If it still doesn't answer your questions, please raise an issue.

## Development

Clone the git repo and install dependencies.

```
npm i

// or

yarn install
```

You can then run following scripts for local development

```
npm run demo  // local demo, watches and rebuilds on changes

npm test  // test your changes

npm lint  // fixes anything that can be fixed and reports remaining errors

npm run test:cov  // test coverage
```

**Note:** If your browser doesn't hot reload or reflect changes during `npm run demo`, then delete `docs/bundle.js` and try again. Before submitting final PR, run `npm run build:docs` to build the bundle.js file again.

## License

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

Released 2017 by [Hrusikesh Panda](https://github.com/mrchief) @ [Dow Jones](https://github.com/dowjones)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://www.yanoucrea.fr"><img src="https://avatars0.githubusercontent.com/u/966550?v=4" width="100px;" alt="toofff"/><br /><sub><b>toofff</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3Atoofff" title="Bug reports">🐛</a> <a href="https://github.com/dowjones/react-dropdown-tree-select/commits?author=toofff" title="Code">💻</a> <a href="https://github.com/dowjones/react-dropdown-tree-select/commits?author=toofff" title="Documentation">📖</a> <a href="#ideas-toofff" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="http://www.les-tilleuls.coop"><img src="https://avatars3.githubusercontent.com/u/1257968?v=4" width="100px;" alt="Grégory Copin"/><br /><sub><b>Grégory Copin</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3AGregcop1" title="Bug reports">🐛</a> <a href="https://github.com/dowjones/react-dropdown-tree-select/commits?author=Gregcop1" title="Code">💻</a></td><td align="center"><a href="https://github.com/priyanshu92"><img src="https://avatars1.githubusercontent.com/u/7589718?v=4" width="100px;" alt="PRIYANSHU AGRAWAL"/><br /><sub><b>PRIYANSHU AGRAWAL</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3Apriyanshu92" title="Bug reports">🐛</a> <a href="https://github.com/dowjones/react-dropdown-tree-select/commits?author=priyanshu92" title="Code">💻</a> <a href="#ideas-priyanshu92" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="http://james.greenaway.io"><img src="https://avatars3.githubusercontent.com/u/425261?v=4" width="100px;" alt="James Greenaway"/><br /><sub><b>James Greenaway</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3Ajvgreenaway" title="Bug reports">🐛</a> <a href="https://github.com/dowjones/react-dropdown-tree-select/commits?author=jvgreenaway" title="Code">💻</a> <a href="#ideas-jvgreenaway" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/itrombitas"><img src="https://avatars1.githubusercontent.com/u/36223986?v=4" width="100px;" alt="itrombitas"/><br /><sub><b>itrombitas</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/commits?author=itrombitas" title="Code">💻</a></td><td align="center"><a href="https://github.com/davehenton"><img src="https://avatars2.githubusercontent.com/u/18341459?v=4" width="100px;" alt="Dave Henton"/><br /><sub><b>Dave Henton</b></sub></a><br /><a href="#infra-davehenton" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td><td align="center"><a href="https://github.com/nagaskolli"><img src="https://avatars3.githubusercontent.com/u/4869717?v=4" width="100px;" alt="Swetha Kolli"/><br /><sub><b>Swetha Kolli</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/commits?author=nagaskolli" title="Code">💻</a></td></tr><tr><td align="center"><a href="https://github.com/BaarishRain"><img src="https://avatars1.githubusercontent.com/u/13344028?v=4" width="100px;" alt="BaarishRain"/><br /><sub><b>BaarishRain</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3ABaarishRain" title="Bug reports">🐛</a></td><td align="center"><a href="http://kovacsalexandrurobert.ro"><img src="https://avatars0.githubusercontent.com/u/32507174?v=4" width="100px;" alt="Kovacs Alexandru Robert"/><br /><sub><b>Kovacs Alexandru Robert</b></sub></a><br /><a href="#ideas-akovacspentalog" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/amondragon"><img src="https://avatars2.githubusercontent.com/u/11201133?v=4" width="100px;" alt="Alexis Mondragon"/><br /><sub><b>Alexis Mondragon</b></sub></a><br /><a href="#ideas-amondragon" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/Charlie91"><img src="https://avatars2.githubusercontent.com/u/13438795?v=4" width="100px;" alt="Charlie91"/><br /><sub><b>Charlie91</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3ACharlie91" title="Bug reports">🐛</a></td><td align="center"><a href="https://github.com/dhirendrarathod2000"><img src="https://avatars3.githubusercontent.com/u/1930681?v=4" width="100px;" alt="Dhirendrasinh"/><br /><sub><b>Dhirendrasinh</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3Adhirendrarathod2000" title="Bug reports">🐛</a></td><td align="center"><a href="https://github.com/JKapostins"><img src="https://avatars1.githubusercontent.com/u/7006862?v=4" width="100px;" alt="JKapostins"/><br /><sub><b>JKapostins</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3AJKapostins" title="Bug reports">🐛</a></td><td align="center"><a href="https://github.com/josvegit"><img src="https://avatars0.githubusercontent.com/u/24354568?v=4" width="100px;" alt="josvegit"/><br /><sub><b>josvegit</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3Ajosvegit" title="Bug reports">🐛</a></td></tr><tr><td align="center"><a href="https://twitter.com/LoconLuis"><img src="https://avatars1.githubusercontent.com/u/12422912?v=4" width="100px;" alt="Luis Locon"/><br /><sub><b>Luis Locon</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3Aloconluis" title="Bug reports">🐛</a></td><td align="center"><a href="https://github.com/mikdatdogru"><img src="https://avatars3.githubusercontent.com/u/10121255?v=4" width="100px;" alt="Mikdat DOĞRU"/><br /><sub><b>Mikdat DOĞRU</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3Amikdatdogru" title="Bug reports">🐛</a></td><td align="center"><a href="https://github.com/will-izard"><img src="https://avatars1.githubusercontent.com/u/7553535?v=4" width="100px;" alt="Will Izard"/><br /><sub><b>Will Izard</b></sub></a><br /><a href="#ideas-will-izard" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://gitlab.com/nikperic"><img src="https://avatars3.githubusercontent.com/u/4504265?v=4" width="100px;" alt="Nikola Peric"/><br /><sub><b>Nikola Peric</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3Anikolap" title="Bug reports">🐛</a></td><td align="center"><a href="https://github.com/ramonrf"><img src="https://avatars2.githubusercontent.com/u/6119839?v=4" width="100px;" alt="Ramón Alejandro Reyes Fajardo"/><br /><sub><b>Ramón Alejandro Reyes Fajardo</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3Aramonrf" title="Bug reports">🐛</a></td><td align="center"><a href="https://github.com/sarada-Cheukupalli"><img src="https://avatars3.githubusercontent.com/u/10716099?v=4" width="100px;" alt="Sarada Cherukupalli"/><br /><sub><b>Sarada Cherukupalli</b></sub></a><br /><a href="#ideas-sarada-Cheukupalli" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/dilip025"><img src="https://avatars1.githubusercontent.com/u/45608461?v=4" width="100px;" alt="Dilip Gavara"/><br /><sub><b>Dilip Gavara</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/commits?author=dilip025" title="Code">💻</a></td></tr><tr><td align="center"><a href="http://www.dealzeit.de"><img src="https://avatars3.githubusercontent.com/u/491877?v=4" width="100px;" alt="Lutz Lengemann"/><br /><sub><b>Lutz Lengemann</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/commits?author=mobilutz" title="Code">💻</a></td><td align="center"><a href="https://github.com/Eainde"><img src="https://avatars0.githubusercontent.com/u/26381655?v=4" width="100px;" alt="Akshay Dipta"/><br /><sub><b>Akshay Dipta</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3AEainde" title="Bug reports">🐛</a></td><td align="center"><a href="https://langworth.com/"><img src="https://avatars3.githubusercontent.com/u/137158?v=4" width="100px;" alt="Ian Langworth ☠"/><br /><sub><b>Ian Langworth ☠</b></sub></a><br /><a href="#ideas-statico" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://github.com/stoberov"><img src="https://avatars1.githubusercontent.com/u/5932031?v=4" width="100px;" alt="Stoyan Berov"/><br /><sub><b>Stoyan Berov</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/commits?author=stoberov" title="Code">💻</a> <a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3Astoberov" title="Bug reports">🐛</a></td><td align="center"><a href="https://github.com/ellinge"><img src="https://avatars0.githubusercontent.com/u/17863113?v=4" width="100px;" alt="ellinge"/><br /><sub><b>ellinge</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/commits?author=ellinge" title="Code">💻</a> <a href="#ideas-ellinge" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-ellinge" title="Maintenance">🚧</a></td><td align="center"><a href="https://github.com/moonjy1993"><img src="https://avatars3.githubusercontent.com/u/5017449?v=4" width="100px;" alt="Sandy M"/><br /><sub><b>Sandy M</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/commits?author=moonjy1993" title="Code">💻</a> <a href="https://github.com/dowjones/react-dropdown-tree-select/issues?q=author%3Amoonjy1993" title="Bug reports">🐛</a></td><td align="center"><a href="https://www.gazab.se"><img src="https://avatars1.githubusercontent.com/u/529614?v=4" width="100px;" alt="Gustav Tonér"/><br /><sub><b>Gustav Tonér</b></sub></a><br /><a href="https://github.com/dowjones/react-dropdown-tree-select/commits?author=gazab" title="Code">💻</a></td></tr></table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!