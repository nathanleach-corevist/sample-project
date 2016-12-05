import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class Loading extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    this.state = {
      delaying: !!this.props.delay
    }
  }

  componentDidMount() {
    if (this.props.delay) {
      this.timeout = setTimeout(this.handleDisplay, this.props.delay)
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }

  handleDisplay() {
    this.timeout = null
    this.setState({delaying: false})
  }

  render() {
    const { delay, inline, text } = this.props
    const { delaying } = this.state
    const className = classNames('Loading', {
      'Loading--delaying': delaying,
      'Loading--displaying': delay && !delaying,
      'Loading--inline': inline
    })

    return (
      <div className={className}>
        {text && <div className="Loading__text">{text}&hellip;</div>}
      </div>
    )
  }
}

Loading.propTypes = {
  delay: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number
  ]),
  inline: React.PropTypes.bool,
  text: React.PropTypes.string
}

Loading.defaultProps = {
  delay: 500,
  inline: false
}

export default Loading
