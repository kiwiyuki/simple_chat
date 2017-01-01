import { connect } from 'react-redux'
import { fetchAllMessages, sendMessage } from '../actions'
import Chat from '../components/Chat'

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (user, message) => dispatch(sendMessage(user, message)),
    fetchAllMessages: () => dispatch(fetchAllMessages())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
