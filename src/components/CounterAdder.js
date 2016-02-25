import React from 'react'
// import { FloatingActionButton, ContentAdd, Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator, TextField, RaisedButton, FontIcon } from 'material-ui'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import { FlatButton, RaisedButton, Dialog, FontIcon, TextField } from 'material-ui'
let Style = {
  position: 'fixed',
  right: '20px',
  bottom: '20px'
}
class CounterAdder extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'hello',
      open: false
    }
  }
  openDialog () {
    this.setState({open: true})
  }

  closeDialog () {
    this.setState({open: false})
  }
  onClickHandler () {
    if (this.refs.input.getValue().length !== 0) {
      console.log(this.refs.input.getValue())
      this.props.submit(this.refs.input.getValue())
      this.refs.input.setValue(null)
      this.closeDialog()
    }
  }
  render () {
    const actions = [
      <RaisedButton
        onMouseUp={this.onClickHandler.bind(this)}
        label='submit'
        secondary={true}
        icon={<FontIcon className='fa fa-check' />} />,
      <FlatButton onMouseUp={this.closeDialog.bind(this)} label='cancel' />
    ]
    return (<div>
              <FloatingActionButton style={Style} onMouseUp={this.openDialog.bind(this)}>
                <ContentAdd />
              </FloatingActionButton>
              <Dialog title='Add an item' open={this.state.open} actions={actions}>
                <TextField ref='input' labelText='Add an item' fullWidth={true} />
              </Dialog>
            </div>
    )
  }
}

export default CounterAdder
