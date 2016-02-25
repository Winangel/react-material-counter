/* @flow */
export const increment = (id: string): any => {
  console.log('incrementing')
  return {
    type: 'INCREMENT',
    payload: {
      id: id
    }
  }
}

export const decrement = (id : string): any => {
  return {
    type: 'DECREMENT',
    payload: {
      id: id
    }
  }
}

export const addCounter = (title : string): any => {
  return {
    type: 'ADDCOUNTER',
    payload: {
      title: title
    }
  }
}
