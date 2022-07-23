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
