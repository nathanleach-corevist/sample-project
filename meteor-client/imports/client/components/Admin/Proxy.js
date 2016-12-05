import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Panel from '../Shared/Panel'
import Input from '../Forms/Input'
import Select from '../Forms/Select'
import Submit from '../Forms/Submit'
import Button from '../Forms/Button'
import { inputs, select } from './data/ProxyData'

class Proxy extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const generatedInputs = inputs.map((input, i) => {
      return <Input key={i} type={input.type} text={input.text} defaultValue={input.defaultValue} />
    })

    return(
      <div className="proxy-login">
        <Panel title="Proxy Login">
          <div className="card-block">
            <form action="" className="proxy-login_form clearfix">
              {generatedInputs}
              <Select className="c-select form-control" text={select.text} options={select.options} />
                <div className="btn-group u-floatRight">
                  <Button href="#" className="btn btn-secondary" text="Reset" />
                  <Submit className="btn btn-primary u-floatRight" text="Login" />
                </div>
            </form>
          </div>
        </Panel>
      </div>
    )
  }
}

 export default Proxy
