import React, { Component, PropTypes } from 'react'
// import ReactDOM from 'react-dom'
export default class MessageForm extends Component {
  static propTypes = {
    sendMessage: PropTypes.func,
  }
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault()
    // const message = ReactDOM.findDOMNode(this.refs.message).value.trim()
    const message = this.message.value.trim()
    const user = this.user.value.trim()
    if (!message && !user) {
      return
    }
    this.props.sendMessage(user, message)
    this.message.value = ''
  }

  render() {
    return (
      <form>
        <input type="text"
               placeholder="name"
               ref={(user) => {
                 this.user = user
               }}/>
        <input type="text"
               placeholder="message"
               ref={(message) => {
                 this.message = message
               }}/>
        <input type="submit" onClick={(e) => this.handleSubmit(e)}/>
      </form>
    )
  }
}
