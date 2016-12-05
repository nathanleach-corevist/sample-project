import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Panel from '../Shared/Panel'

class RecentOrders extends Component{
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return(
      <div className="dashboard__recent-orders">
        <Panel title="Recently Placed Web Orders">
          <div className="card-block">You have not placed any orders yet.</div>
        </Panel>
      </div>
    )
  }
}

export default RecentOrders
