import React from 'react'

import LinkedList from 'DataStructures/LinkedList'
import Reverse from 'DataStructures/LinkedList/Reverse'

const LinkedListExample = (
  <div>
    <h5>List</h5>
    <LinkedList vals={[1, 2, 3, 4, 5]}>{list => list}</LinkedList>
    <br />

    <h5>Reversed</h5>
    <LinkedList vals={[1, 2, 3, 4, 5]}>
      {list => <Reverse list={list}>{reversed => reversed}</Reverse>}
    </LinkedList>
    <br />

    <h5>Double Reversed!</h5>
    <LinkedList vals={[1, 2, 3, 4, 5]}>
      {list => (
        <Reverse list={list}>
          {reversed => (
            <Reverse list={reversed}>
              {doubleReversed => doubleReversed}
            </Reverse>
          )}
        </Reverse>
      )}
    </LinkedList>
  </div>
)

export default LinkedListExample
