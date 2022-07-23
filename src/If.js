import React from 'react'

export const If = (props) => {
  return props.condition ? props.children : null
}

export const Else = (props) => props.children

export const ElseIf = If

export const IfBlock = (props) => {
  const childrenArray = React.Children.toArray(props.children)
  const component = childrenArray.find(
    (children) => children.props.condition || children.type === Else
  )
  return component ?? null
}

export const Ifs = IfBlock
