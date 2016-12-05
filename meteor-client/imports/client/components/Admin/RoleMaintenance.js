import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Button from '../Forms/Button'

class RoleMaintenance extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  getActionIcons(actions) {
    const icons = _.map(actions, (action, i) => {
      switch (action) {
        case "copy":
          return <a key={i} href="#" className="btn btn-secondary btn-sm"><i className="fa fa-clone" aria-hidden="true"></i></a>
        default:
          return
      }
    })
    return icons
  }

  render() {
    const roles = this.props.data.role

    const roleData = _.map(roles, (role, i) => {
      const isActive = role.active ? <span className={"fa fa-check-circle u-successGreen"} aria-hidden="true"></span> : <span className="fa fa-ban u-errorRed" aria-hidden="true"></span>;
      const isAdmin = role.admin ? <span className={"fa fa-check-circle u-successGreen"} aria-hidden="true"></span> : <span className="fa fa-ban u-errorRed" aria-hidden="true"></span>;
      const actions = this.getActionIcons(["copy"]);

      return (
        <tr key={i}>
          <td>{ role.name }</td>
          <td>{ role.createdBy }</td>
          <td>{ role.createdAt }</td>
          <td>{ role.updatedBy }</td>
          <td>{ role.updatedAt }</td>
          <td className="u-alignCenter">{ isActive }</td>
          <td className="u-alignCenter">{ isAdmin }</td>
          <td className="u-alignCenter">{ actions }</td>
        </tr>
      )
    })

    return(
      <div className="role-maintenance">
        <fieldset className="form-group">
          <Button href="#" className="btn btn-secondary" text="New Role" />
        </fieldset>
        <table className="table table-striped table-condensed">
          <thead>
            <tr>
              <th>Role Name:</th>
              <th>Created By:</th>
              <th>Created On:</th>
              <th>Changed By:</th>
              <th>Changed On:</th>
              <th className="u-alignCenter">Activated:</th>
              <th className="u-alignCenter">Admin Role:</th>
              <th className="u-alignCenter">Actions:</th>
            </tr>
          </thead>
          <tbody>
            {roleData}
          </tbody>
        </table>
      </div>
    )
  }



}

export default RoleMaintenance
