import React from 'react'
import ReactDOM from 'react-dom'

import LinkedList from 'DataStructures/LinkedList'
import Reverse from 'DataStructures/LinkedList/Reverse'
const example = (
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
ReactDOM.render(example, document.getElementById('vortex'))
