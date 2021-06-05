// store.js
import React, { createContext, useReducer } from 'react'

function isPlainObject (input) {
  return input && !Array.isArray(input) && typeof input === 'object'
}

const recuObjectUpdate = (object, key, elem) => {
  console.log('key', key)
  console.log('object', object)
  if (!isPlainObject(object)) return
  if (object[key] !== undefined) {
    console.log('FIND', key)
    object[key] = [elem, ...object[key].filter((e) => e.id !== elem.id)].sort(
      (a, b) => a.id - b.id
    )
  } else {
    Object.keys(object).forEach((subkey) => {
      console.log('subkey', subkey)
      recuObjectUpdate(object[subkey], key, elem)
    })
  }
}

const updateSection = (state, elem) => {
  const newMenu = { ...state.menu }
  recuObjectUpdate(newMenu, elem.sectionKey, elem)
  console.log('updatedObject', newMenu)
  return { ...state, menu: newMenu }
}

const initialState = {
  user: undefined,
  menu: {},
  order: []
}
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState = {}
    switch (action.type) {
      case 'action description':
        newState = { succes: 'yes' } // do something with the action
        return newState
      case 'init-menu': {
        newState = { ...state, ...action.value }
        return newState
      }
      case 'update-menu': {
        newState = { ...state, ...action.value }
        return newState
      }
      case 'update-menu-section': {
        return updateSection(state, { ...action.value })
      }
      case 'add-order': {
        const newOrder = action.value
        const order = [...state.order].filter(
          (elem) => elem.id !== newOrder.id
        )
        order.push(newOrder)
        return { ...state, order }
      }
      case 'delete-order': {
        const id = action.value
        const order = [...state.order].filter((elem) => elem.id !== id)
        return { ...state, order }
      }
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
