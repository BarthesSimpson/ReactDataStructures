import React, { Fragment } from 'react'

export const ListNode = ({ val, next }) => (
  <Fragment>
    {JSON.stringify(val)} {next && '>'} {next}
  </Fragment>
)

const LinkedList = ({ vals, children }) => {
  let head
  let curr
  let val
  let next = null
  let i = vals.length
  while (i > 0) {
    let key = i - 1
    val = vals[key]
    curr = <ListNode next={next} val={val} />
    next = curr
    i--
  }
  head = curr
  return <Fragment>{children(head)}</Fragment>
}

export default LinkedList
