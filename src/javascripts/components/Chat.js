import React, { Component, PropTypes } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

export default class Chat extends Component {
  static propTypes = {
    fetchAllMessages: PropTypes.func,
    sendMessage: PropTypes.func,
    messages: PropTypes.object
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this)
  }

  render() {
    return (
      <div>
        <MessageForm sendMessage={this.props.sendMessage}/>
        <MessageList messages={this.props.messages.messageList}/>
      </div>
    )
  }
}
