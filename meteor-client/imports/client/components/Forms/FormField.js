import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classNames from 'classnames'

import Loading from './Loading'
import Help from './Help'

class FormField extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const { children, field, help, inputClass, inputProps, label, loading } = this.props
    const error = field.touched && field.error

    return (
      <fieldset className={ classNames('form-group', { 'has-error': error }) }>
        { loading && <Loading inline /> }
        <label className="control-label" htmlFor={ inputProps.id }>{label}</label>
        {help && <Help text={ help } />}
        <div className={ inputClass }>
          { children }
          { error && <p className="help-block" style={ { marginBottom: 0 } }>{ error }</p> }
        </div>
      </fieldset>
    )
  }

}

FormField.propTypes = {
  field: PropTypes.object,
  help: PropTypes.string,
  inputClass: PropTypes.string,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  loading: PropTypes.bool
}

FormField.defaultProps = {
  field: {},
  inputProps: {}
}

export default FormField
