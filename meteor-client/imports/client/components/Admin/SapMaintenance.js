import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Panel from '../Shared/Panel';

const date = Date.now()
const mockMaintenance = [
  { dtFrom: date, dtTo: date, created_by: "b2b", created_on: date, changed_by: "b2b", changed_on: date },
  { dtFrom: date, dtTo: date, created_by: "b2b", created_on: date, changed_by: "b2b", changed_on: date },
  { dtFrom: date, dtTo: date, created_by: "b2b", created_on: date, changed_by: "b2b", changed_on: date },
  { dtFrom: date, dtTo: date, created_by: "b2b", created_on: date, changed_by: "b2b", changed_on: date },
  { dtFrom: date, dtTo: date, created_by: "b2b", created_on: date, changed_by: "b2b", changed_on: date },
  { dtFrom: date, dtTo: date, created_by: "b2b", created_on: date, changed_by: "b2b", changed_on: date },
  { dtFrom: date, dtTo: date, created_by: "b2b", created_on: date, changed_by: "b2b", changed_on: date },
  { dtFrom: date, dtTo: date, created_by: "b2b", created_on: date, changed_by: "b2b", changed_on: date },
  { dtFrom: date, dtTo: date, created_by: "b2b", created_on: date, changed_by: "b2b", changed_on: date },
]

class SapMaintenance extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const maintenanceData = _.map(mockMaintenance, (role, i) => {
      return (
        <tr key={i}>
          <td>{ role.dtFrom }</td>
          <td>{ role.dtTo }</td>
          <td>{ role.created_by }</td>
          <td>{ role.created_on }</td>
          <td>{ role.changed_by }</td>
          <td>{ role.changed_on }</td>
        </tr>
      )
    })

    return(
      <div className="sap-maintenance">
        <fieldset className="sap-maintenance__action-btns form-group">
          <div className="btn-group">
            <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#routeTracing" aria-expanded="false" aria-controls="collapseExample">
              Route Tracing
            </button>
            <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#pingSap" aria-expanded="false" aria-controls="collapseExample">
              Ping SAP
            </button>
            <button className="btn btn-secondary" type="button" data-toggle="collapse" data-target="#shortDump" aria-expanded="false" aria-controls="collapseExample">
              SAP Short Dump
            </button>
          </div>
          <div className="btn-group u-floatRight">
            <button className="btn btn-danger" type="button">
              Restart App
            </button>
            <button className="btn btn-primary" type="button">
              Reactivate SAP Monitor
            </button>
          </div>
        </fieldset>
        <div className="collapse sap-maintenance__collapse-box" id="routeTracing">
          <div className="card card-block">
            Route Tracing response goes here
          </div>
        </div>
        <div className="collapse sap-maintenance__collapse-box" id="pingSap">
          <div className="card card-block">
            Ping SAP response goes here
          </div>
        </div>
        <div className="collapse sap-maintenance__collapse-box" id="shortDump">
          <div className="card card-block">
            SAP Short Dump response goes here
          </div>
        </div>
        <div className="sap-maintenance__card-row">
          <div className="sap-maintenance__sidebar">
            <Panel title="Next Down Times">
              <div className="card-block">
                <p className="card-text">The time zone of the displayed times is EST (US East Coast).</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  SAP down from:
                  <span className="label label-default pull-xs-right">None</span>
                </li>
                <li className="list-group-item">
                  SAP down to:
                  <span className="label label-default pull-xs-right">None</span>
                </li>
                <li className="list-group-item">
                  App down from:
                  <span className="label label-default pull-xs-right">None</span>
                </li>
                <li className="list-group-item">
                  App down to:
                  <span className="label label-default pull-xs-right">None</span>
                </li>
                {/*<li className="list-group-item">Message: </li>
                <li className="list-group-item">
                  Announcement Window:
                  <span className="label label-info pull-xs-right">10 days</span>
                </li>
                <li className="list-group-item">
                  System Warning Window:
                  <span className="label label-info pull-xs-right">15 minutes</span>
                </li>*/}
              </ul>
            </Panel>
          </div>
          <div className="sap-maintenance__content">
            <Panel title="SAP Maintenance">
              <div className="card-block clearfix">
                <div className="sap-maintenance__msg-wrap">
                  <h5 className="card-title">Message:</h5>
                  <p className="card-text text-muted"><i>There are currently no messages.</i></p>
                </div>
              </div>
              <div className="card-block">
                <p className="sap-maintenance__info">
                  <strong>Announcement Window:</strong> 10 days in advance
                </p>
                <p className="sap-maintenance__info">
                  <strong>System Warning Window:</strong> 15 minutes in advance
                </p>
              </div>
              <table className="table table-striped table-condensed">
                <thead>
                  <tr>
                    <th>Down time From:</th>
                    <th>Down time To:</th>
                    <th>Created By:</th>
                    <th>Created On:</th>
                    <th>Changed By:</th>
                    <th>Changed On:</th>
                  </tr>
                </thead>
                <tbody>
                  {maintenanceData}
                </tbody>
              </table>
            </Panel>
          </div>
        </div>
      </div>
    )
  }
}

export default SapMaintenance
