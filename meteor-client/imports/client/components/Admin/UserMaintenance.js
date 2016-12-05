import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Panel from '../Shared/Panel'
import Input from '../Forms/Input'
import Select from '../Forms/Select'
import Button from '../Forms/Button'
import Submit from '../Forms/Submit'
import { inputs, userStatusSelect, roleSelect } from './data/UserMaintenanceData'

class UserMaintenance extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const generatedInputs = inputs.map((input, i) => {
      return <Input key={i} type={input.type} text={input.text} defaultValue={input.defaultValue} />
    })

    return(
      <div className="user-maintenance">
        <fieldset className="form-group">
          <Button href="#" className="btn btn-secondary" text="New User"/>
        </fieldset>
        <Panel title="User Search Criteria">
          <div className="card-block">
            <div className="user-maintenance__search-form clearfix">
              <Select className="c-select form-control" text={userStatusSelect.text} options={userStatusSelect.options} />
              <Select className="c-select form-control" text={roleSelect.text} options={roleSelect.options} />
              {generatedInputs}

              <div className="btn-group u-floatRight">
                <a href="#" className="btn btn-secondary">Reset</a>
                <Submit className="btn btn-primary u-floatRight" text="Submit"/>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    )
  }
}

export default UserMaintenance
