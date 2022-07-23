# react-logic-components

> This library add components that simulates If, For and other statements

[![NPM](https://img.shields.io/npm/v/react-logic-components.svg)](https://www.npmjs.com/package/react-logic-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-logic-components
```

## Usage

```jsx
import React from 'react'

import { Case, Default, If, Switch, For } from 'react-logic-components'

const App = () => {
  const ifCondition = true

  return (
    <div>
      <If condition={false}>
        <p>This if component should not render </p>
      </If>

      <If condition={ifCondition}>
        <p>This if component should render</p>
      </If>

      <Switch value={2}>
        <Case value={1}>
          <p> Value 1 should not render</p>
        </Case>
        <Case value={2}>
          <p>Value 2 should render</p>
        </Case>
        <Default>
          <p>Default value should not render</p>
        </Default>
      </Switch>

      <For
        start={2}
        maxValue={5}
        element={(props) => <p>{props.index}. From 2 to 5 should be render</p>}
      />
    </div>
  )
}

export default App

```

## License

MIT © [AlStinson](https://github.com/AlStinson)
