import React, {Component} from 'react'

class TextInput extends Component {
  render () {
    const {value, onValueChange, labelName} = this.props
    return (<div>
      {/* //TODO: maybe add a label element? */}
      {/* //TODO: how to optimize the onChange code? */}
      <label>{labelName}</label>
      <input type='text' value={value} onChange={value => onValueChange(value)} />
    </div>
    )
  }
}

export default TextInput
