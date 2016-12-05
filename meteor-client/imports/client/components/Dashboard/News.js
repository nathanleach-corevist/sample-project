import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class News extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return(
      <div className="dashboard__news">
        <div className="news__header-bar">
          News
          <a className='news__header-bar-link u-floatRight' data-toggle="collapse" href="#collapseNews" aria-expanded="false" aria-controls="collapseNews">View News</a>
        </div>
        <div className="collapse" id="collapseNews">
          <div className="card card-block">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
    )
  }
}

export default News
