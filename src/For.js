import React from 'react'

export const For = (props) => {
  const start = props.start ?? 0
  const element = props.element ?? props.children ?? (() => null)

  const childrens = []
  for (let i = start; i <= props.maxValue; props.decrement ? i-- : i++) {
    const index = props.nestedIndex ? [...props.nestedIndex, i] : i
    if (element.type === For) {
      const forProps = {
        ...element.props,
        nestedIndex: props.nestedIndex ? index : [index],
        propsToPropagate: {
          ...props.propsToPropagate,
          ...element.props.propsToPropagate
        },
        key: index
      }
      childrens.push(<For {...forProps} />)
    } else {
      const elementProps = { ...props.propsToPropagate, index }
      childrens.push(element(elementProps))
    }
  }
  return childrens
}
