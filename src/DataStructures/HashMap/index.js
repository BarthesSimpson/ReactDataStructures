import React, { useEffect, useState } from 'react'
import murmurhash from './murmurhash'

const hash = murmurhash(Math.floor(Math.random() * 100))

const HashMap = ({ add, get, remove, children }) => {
  const LENGTH = 50
  const [array, setArray] = useState(new Array(LENGTH).fill(0).map(() => []))
  const [ret, setReturn] = useState()

  // add an element {key, val}
  useEffect(
    () => {
      if (!add) return
      const { key, val } = add
      console.log({ hash, key, val })
      const hashVal = hash(key) % LENGTH
      console.log({ hashVal })
      console.log(array[hashVal])
      const newSlot = [...array[hashVal], { key, val }]
      setArray([
        ...array.slice(0, hashVal),
        newSlot,
        ...array.slice(hashVal + 1)
      ])
    },
    [add]
  )

  // get an element by key
  useEffect(
    () => {
      if (!get) return
      const { key } = get
      const hashVal = hash(key) % LENGTH
      const res = array[hashVal].find(({ key: k }) => k === key)
      setReturn(res && res.val)
    },
    [get]
  )

  // remove an element by key
  useEffect(
    () => {
      if (!remove) return
      const { key } = remove
      const hashVal = hash(key) % LENGTH
      const newSlot = array[hashVal].filter(({ key: k }) => k !== key)
      setReturn(undefined)
      setArray([
        ...array.slice(0, hashVal),
        newSlot,
        ...array.slice(hashVal + 1)
      ])
    },
    [remove]
  )
  return children(ret)
}

export default HashMap
