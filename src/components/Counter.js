/* @flow */
import React from 'react'
import {IconButton} from 'material-ui'
import {ListItem, Avatar, Divider} from 'material-ui'
let Style = {
  position : 'absolute',
  right : 0
}
const Counter = ({title, count, incr, decr}: {title: string, count: number, incr: Function, decr: Function}) => {

  let onIncrement = () => {
    incr(title)
  }
  let onDecrement = () => {
    decr(title)
  }
  return (
    <div>
    <ListItem
    disabled={true}
    leftAvatar={<Avatar>{title.charAt(0)}</Avatar>}
    primaryText={title}
    secondaryText={
    <p>
    <span>{count}</span>
    </p>}
    >
    <div style={Style}>
    <IconButton onMouseDown={onIncrement} iconClassName='fa fa-caret-up' />
    <IconButton onMouseUp={onDecrement} iconClassName='fa fa-caret-down' />
    </div>
    </ListItem>
    <Divider/>
    </div>
  )
}

export default Counter
