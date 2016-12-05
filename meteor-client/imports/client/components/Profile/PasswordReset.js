import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Panel from '../Shared/Panel'
import Input from '../Forms/Input'
import Select from '../Forms/Select'
import Button from '../Forms/Button'
import Submit from '../Forms/Submit'

class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const { inputs, select } = this.props
    const generatedInputs = inputs.map((input, i) => {
      return <Input key={i} type={input.type} text={input.text} defaultValue={input.defaultValue} />
    });

    return(
      <div className="password-reset">
        <Panel title="Reset Password Details">
          <div className="card-block">
            <form action="" className="password-reset_form clearfix">
              <Select className="c-select form-control" text={select.text} options={select.options} />
              {generatedInputs}
              <div className="btn-group u-floatRight">
                <Button href="#" className="btn btn-secondary" text="Reset" />
                <Submit className="btn btn-primary u-floatRight" text="Submit" />
              </div>
            </form>
          </div>
        </Panel>
      </div>
    )
  }
}

export default PasswordReset
