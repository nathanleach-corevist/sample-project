import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import News from '../components/Dashboard/News'
import Shortcuts from '../components/Dashboard/Shortcuts'
import PricingAvailability from '../components/Dashboard/PricingAvailability'
import RecentOrders from '../components/Dashboard/RecentOrders'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render() {
    return (
      <div className="dashboard">
        <News/>
        <Shortcuts />
        <PricingAvailability />
        <RecentOrders/>
      </div>
    )
  }
}

export default Dashboard
