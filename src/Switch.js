import React from 'react'

export const Switch = (props) => {
  const childrensArray = React.Children.toArray(props.children)
  const output = childrensArray.find(
    (children) => children.props.value === props.value && children.type === Case
  )
  const defaultChildren = childrensArray.find(
    (children) => children.type === Default
  )
  return output ?? defaultChildren ?? null
}

export const Case = (props) => props.children

export const Default = (props) => props.children
