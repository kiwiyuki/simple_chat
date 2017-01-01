import React, { Component } from 'react'
import Chat from '../containers/ChatContainer'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <Chat />
      </div>
    )
  }
}
