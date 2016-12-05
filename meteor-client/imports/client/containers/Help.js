import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Panel from '../components/Shared/Panel'
import LINKS from './data/HelpData'

const showLink = (e, sURL, sLinkDesc, sGoogle) => {
  e.preventDefault();
  //if(sGoogle){ pageTracker._trackPageview(escape(sLinkDesc))}
  window.open(sURL);
}

const orderEntry = LINKS.orderEntry
const orderTracking = LINKS.orderTracking
const profile = LINKS.profile
const reporting = LINKS.reporting
const helpLinks = LINKS.helpLinks
const feedback = LINKS.feedback
const documents = LINKS.documents

class Help extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const orderEntryLinkItems = _.map(orderEntry, (link, i) => {
      return (
        <p className="card-text">
          <a href="#" onClick={e => showLink(e, link.url, link.desc, link.google)}>{link.text}</a>
        </p>
      )
    })
    const orderTrackingLinkItems = _.map(orderTracking, (link, i) => {
      return (
        <p className="card-text">
          <a href="#" onClick={e => showLink(e, link.url, link.desc, link.google)}>{link.text}</a>
        </p>
      )
    })
    const profileLinkItems = _.map(profile, (link, i) => {
      return (
        <p className="card-text">
          <a href="#" onClick={e => showLink(e, link.url, link.desc, link.google)}>{link.text}</a>
        </p>
      )
    })
    const reportingLinkItems = _.map(reporting, (link, i) => {
      return (
        <p className="card-text">
          <a href="#" onClick={e => showLink(e, link.url, link.desc, link.google)}>{link.text}</a>
        </p>
      )
    })
    const helpLinkItems = _.map(helpLinks, (link, i) => {
      return (
        <p className="card-text">
          <a href="#" onClick={e => showLink(e, link.url, link.desc, link.google)}>{link.text}</a>
        </p>
      )
    })
    const feedbackLinkItems = _.map(feedback, (link, i) => {
      return (
        <p className="card-text">
          <a href="#" onClick={e => showLink(e, link.url, link.desc, link.google)} className="btn btn-success">{link.text}</a>
        </p>
      )
    })
    const documentLinkItems = _.map(documents, (link, i) => {
      return (
        <p className="card-text">
          <a href="#" onClick={e => showLink(e, link.url, link.desc, link.google)}>{link.text}</a>
        </p>
      )
    })

    return(
      <div className="help">
        <div className="help__left-column">
          <Panel title="Training Videos">
            <div className="card-block">
              <h4 className="card-title">Order Entry</h4>
              {orderEntryLinkItems}

              <h4 className="card-title">Order Tracking</h4>
              {orderTrackingLinkItems}

              <h4 className="card-title">Reporting</h4>
              {reportingLinkItems}

              <h4 className="card-title">Profile</h4>
              {profileLinkItems}
            </div>
          </Panel>
        </div>
        <div className="help__right-column">
          <Panel title="Help Resources">
            <div className="card-block">
              <h4 className="card-title">Links</h4>
              {helpLinkItems}

              <h4 className="card-title">Feedback</h4>
              {feedbackLinkItems}

              <h4 className="card-title">Documents</h4>
              {documentLinkItems}
            </div>
          </Panel>
        </div>
      </div>
    )
  }
}

export default Help
