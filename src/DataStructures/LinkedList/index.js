import React from 'react'

const NodeContainer = ({ children }) => [children]
export const ListNode = ({ val, next }) => (
  <NodeContainer>
    {val.toString()}
    {next}
  </NodeContainer>
)

export const ListContainer = ({ children }) => [children]
const LinkedList = ({ vals, children }) => {
  let head
  let curr
  let val
  let next = null
  let i = vals.length
  while (i > 0) {
    let key = i - 1
    val = vals[key]
    curr = <ListNode key={key} next={next} val={val} />
    next = curr
    i--
  }
  head = curr
  return <ListContainer>{children(head)}</ListContainer>
}

export default LinkedList
