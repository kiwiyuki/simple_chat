import React, { Component, PropTypes } from 'react'

export default class Message extends Component {
  static propTypes = {
    user: PropTypes.string,
    message: PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  render() {
    const style = {
      listStyle: 'none'
    }
    return (
      <li style={style}>{this.props.user}: { this.props.message }</li>
    )
  }
}
