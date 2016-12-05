import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import FormField from './FormField'

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const { field, help, label, onChange, ...inputProps } = this.props

    return (
      <FormField field={field} help={help} inputProps={inputProps} label={label}>
        <input
          {...inputProps}
          className="form-control"
          name={field.name}
          onBlur={field.onBlur}
          onChange={onChange && field.onChange}
        />
      </FormField>
    )
  }
}

TextInput.propTypes = {
  field: PropTypes.object.isRequired
}

export default TextInput
