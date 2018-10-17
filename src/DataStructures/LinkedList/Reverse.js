import React from 'react'
import { ListContainer, ListNode } from 'DataStructures/LinkedList'

const Reverse = ({ list, children }) => {
  let vals = [list.props.val]
  let probe = list
  while (probe.props.next) {
    probe = probe.props.next
    vals.push(probe.props.val)
  }
  let head
  let curr
  let val
  let next = null
  let i = 0
  while (i < vals.length) {
    let key = i
    val = vals[key]
    curr = <ListNode key={key} next={next} val={val} />
    next = curr
    i++
  }
  head = curr

  return <ListContainer>{children(head)}</ListContainer>
}

export default Reverse
