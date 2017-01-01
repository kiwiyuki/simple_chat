import React, { Component, PropTypes } from 'react'
import Message from './Message'
export default class MessageList extends Component {
  static propTypes = {
    messageList: PropTypes.array,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    let messages
    messages = this.props.messageList.map((m, i) => {
      return (
        <Message key={i} user={m.user} message={m.message} />
      )
    })

    return (
      <ul className="messageList">
         {messages}
      </ul>
    )
  }
}
