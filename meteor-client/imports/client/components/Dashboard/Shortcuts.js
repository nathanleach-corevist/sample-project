import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import Panel from '../Shared/Panel'
import Button from '../Forms/Button'
import BUTTONS from './data/ShortcutInputs'

class Shortcuts extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const generatedInputs = BUTTONS.map((input, i) => {
      return <Link key={i} to={input.path} className="btn btn-secondary">{input.text}</Link>
    })

    return(
      <div className="dashboard__shortcuts">
        <Panel title="Short Cuts">
          <div className="card-block">
            <div className="btn-group">
              {generatedInputs}
            </div>
          </div>
        </Panel>
      </div>
    )
  }
}

export default Shortcuts
