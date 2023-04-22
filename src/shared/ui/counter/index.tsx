import React from 'react'
import { Ellipse } from './style'

type Props = {
  count: number
}

const Counter = ({ count = 0 }: Props) => {
  return (
    <Ellipse>
      <span>{count}</span>
    </Ellipse>
  )
}

export default Counter