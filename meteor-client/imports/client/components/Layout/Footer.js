import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Footer extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__copyright">&copy; Corporatoin, Inc.</div>
          <div className="footer__links u-floatRight">
            <a href="">Report an Issue</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
