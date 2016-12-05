import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import FormField from './FormField'

class StaticField extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const { label, value } = this.props
    return <FormField inputClass='form-control-static' label={ label }>{ value }</FormField>
  }

}

export default StaticField
