import React, { useState } from 'react'

import { Case, Default, If, Switch, For } from 'react-logic-components'

const App = () => {

  const [maxValue, setMaxValue] = useState(5);

  const ifCondition = true

  const changeMaxValue = () => setMaxValue(last => last + 1);

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
      <button onClick={changeMaxValue}>Add +1 to the max value</button>
      <For
        start={2}
        maxValue={maxValue}
        element={(props) => <p>{props.index}. From 2 to {maxValue} should be render</p>}
      />
    </div>
  )
}

export default App
