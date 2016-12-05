import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Panel from '../Shared/Panel'
import Input from '../Forms/Input'
import Submit from '../Forms/Submit'
import Button from '../Forms/Button'
import INPUTS from './data/PricingAvailabilityInputs'

class PricingAvailability extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const generatedInputs = INPUTS.map((input, i) => {
      return <Input key={i} type={input.type} text={input.text} defaultValue={input.defaultValue} />
    })

    return(
      <div className="dashboard__pricing-availability">
        <Panel title="Check Pricing and Availability">
          <form className="pricing-availability__search-form">
            <div className="card-block clearfix">
              {generatedInputs}

              <div className="btn-group u-floatRight">
                <Button href="#" className="btn btn-secondary" text="Reset" />
                <Submit className="btn btn-primary u-floatRight" text="Search" />
              </div>
            </div>
          </form>
        </Panel>
      </div>
    )
  }
}

export default PricingAvailability
