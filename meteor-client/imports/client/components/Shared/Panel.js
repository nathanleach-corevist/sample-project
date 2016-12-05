import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Input from '../Forms/Input'
import Select from '../Forms/Select'

class Panel extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return(
      <div className="card">
        <h5 className="card-header">{this.props.title}</h5>
        {this.props.children}
      </div>
    )
  }
}

export default Panel
