import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { loadRoles } from '../actions'
import UserMaintenance from '../components/Admin/UserMaintenance'
import RoleMaintenance from '../components/Admin/RoleMaintenance'
import ContentMaintenance from '../components/Admin/ContentMaintenance'
import SapMaintenance from '../components/Admin/SapMaintenance'

class Maintenance extends Component {
  loadData(props) {
    props.loadRoles()
  }

  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentWillMount(){
    this.loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.props.name) {
      this.loadData(nextProps)
    }
  }

  generateMaintenanceType(type, data) {
    switch (type) {
      case "user": return <UserMaintenance/>
      case "role": return <RoleMaintenance data={data}/>
      case "content": return <ContentMaintenance/>
      case "sap": return <SapMaintenance roles=""/>
    }
  }
  render() {
    const maintenanceType = this.generateMaintenanceType(this.props.params.type, this.props);
    const { role } = this.props
    return(
      <div className="maintenance">
        {maintenanceType}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    entities: { role }
  } = state

  return {
    role: role,
  }
}

export default connect(mapStateToProps, {
  loadRoles
})(Maintenance)
