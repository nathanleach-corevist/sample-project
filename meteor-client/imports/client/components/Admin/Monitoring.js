import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Panel from '../Shared/Panel'
import { links } from './data/MonitoringData'

class Monitoring extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const availableLinkItems = _.map(links.availableOptions, (link, i) => {
      return (
        <p key={i} className="card-text">
          <a href={link.url} target="_blank">{link.text}</a>
        </p>
      )
    })

    const userLinkItems = _.map(links.userLists, (link, i) => {
      return (
        <p key={i} className="card-text">
          <a href={link.url}>{link.text}</a>
        </p>
      )
    })

    return(
      <div className="monitoring">
        <div className="monitoring__avail-opts">
          <Panel title="Available Options">
            <div className="card-block">
              <ul>{availableLinkItems}</ul>
            </div>
          </Panel>
        </div>
        <div className="monitoring__user-lists">
          <Panel title="Download User Lists">
            <div className="card-block">
              <ul>{userLinkItems}</ul>
            </div>
          </Panel>
        </div>
      </div>
    )
  }

}

export default Monitoring
