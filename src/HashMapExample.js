import React, { Fragment, useEffect, useState } from 'react'

import HashMap from 'DataStructures/HashMap'

const HashMapExampleWrapper = ({ children }) => {
  const [text, setText] = useState()
  const [add, setAdd] = useState()
  const [get, setGet] = useState()
  const [remove, setRemove] = useState()

  useEffect(() => {
    const keys = ['Cherry', 'Lobster', 'Vampire', 'Tacos', 99]
    const vals = ['Pie', 'Bisque', 'Bats', 'Chukkis', 100]

    // set these suckers
    keys.forEach((key, i) =>
      setTimeout(() => {
        setText(`Setting ${key}`)
        setAdd({ key, val: vals[i] })
      }, 1000 * i)
    )
    // get these suckers
    keys.forEach((key, i) =>
      setTimeout(() => {
        setText(`Getting ${key}`)
        setGet({ key })
      }, 5000 + 1000 * i)
    )
    // remove these suckers
    keys.forEach((key, i) =>
      setTimeout(() => {
        setText(`Deleting ${key}`)
        setRemove({ key })
      }, 10000 + 1000 * i)
    )
    // try (and fail) to these suckers again
    keys.forEach((key, i) =>
      setTimeout(() => {
        setText(`Getting ${key}`)
        setGet({ key })
      }, 15000 + 1000 * i)
    )
  }, [])

  return (
    <Fragment>
      {text}
      <br />
      {children({ add, get, remove })}
    </Fragment>
  )
}

const HashMapExample = (
  <HashMapExampleWrapper>
    {props => <HashMap {...props}>{val => <span>{val}</span>}</HashMap>}
  </HashMapExampleWrapper>
)

export default HashMapExample
