import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Panel from '../Shared/Panel'
import Button from '../Forms/Button'
import Submit from '../Forms/Submit'

class OpenItems extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return(
      <div className="open-items">
        <Panel title="Payer Info">
          <div className="card-block">
            <form action="" className="open-items__form clearfix">
              <fieldset className="form-group">
                <label className="control-label">Payer:</label>
                <div className="input-group">
                  <input className="form-control" id="" maxLength="10" name="" type="text" />
                  <span className="input-group-btn">
                    <a href="#" className="btn btn-secondary" onclick="new Lightbox.base('sold-to-search-popup', {returnField : 'sold_to_number'}); return false;">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                  </span>
                </div>
              </fieldset>
              <div className="btn-group u-floatRight">
                <Button href="#" className="btn btn-secondary" text="Reset" />
                <Submit className="btn btn-primary u-floatRight" text="Select" />
              </div>
            </form>
          </div>
          <div className="open-items_payer-info-results list-group list-group-flush">
            {/*<div className="list-group-item">Item 1</div>
            <div className="list-group-item">Item 2</div>
            <div className="list-group-item">Item 3</div>*/}
          </div>
        </Panel>
        <Panel title="Open Items">
          <div className="card-block"></div>
        </Panel>
      </div>
    )
  }
}

export default OpenItems
