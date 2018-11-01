import React, { Fragment } from 'react'
import { ListNode } from 'DataStructures/LinkedList'

const Reverse = ({ list, children }) => {
  let prev = null
  let curr = list
  let next = null

  while (!!curr) {
    next = curr.props.next
    curr = <ListNode val={curr.props.val} next={prev} />
    prev = curr
    curr = next
  }
  
  let head = prev
  return <Fragment>{children(head)}</Fragment>
}

export default Reverse
